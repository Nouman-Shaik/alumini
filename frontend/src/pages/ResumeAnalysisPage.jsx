import { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { Badge } from '../components/ui/badge';
import { Upload, CheckCircle2, AlertCircle, TrendingUp, FileText, Zap } from 'lucide-react';
import { toast } from 'sonner';

export default function ResumeAnalysisPage() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [file, setFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const currentScore = 78;
  const previousScore = 72;
  const improvement = currentScore - previousScore;

  const suggestions = [
    { category: 'Keywords', score: 85, status: 'good', tips: ['Add more technical skills', 'Include industry-specific terms'] },
    { category: 'Format', score: 72, status: 'warning', tips: ['Improve spacing and alignment', 'Use consistent fonts'] },
    { category: 'Content', score: 78, status: 'good', tips: ['Expand project descriptions', 'Add quantifiable results'] },
    { category: 'Experience', score: 65, status: 'warning', tips: ['Highlight achievements', 'Use action verbs'] },
  ];

  const skillsGap = [
    { skill: 'Python', proficiency: 85, required: 90, gap: 5 },
    { skill: 'React', proficiency: 70, required: 85, gap: 15 },
    { skill: 'TypeScript', proficiency: 60, required: 80, gap: 20 },
    { skill: 'AWS', proficiency: 55, required: 75, gap: 20 },
  ];

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.type === 'application/pdf' || selectedFile.name.endsWith('.pdf')) {
        setFile(selectedFile);
        toast.success(`Resume uploaded: ${selectedFile.name}`);
      } else {
        toast.error('Please upload a PDF file');
      }
    }
  };

  const handleAnalyze = async () => {
    if (!file) {
      toast.error('Please upload a resume first');
      return;
    }
    
    setIsAnalyzing(true);
    setTimeout(() => {
      setAnalysisResult({
        score: currentScore,
        timestamp: new Date().toLocaleDateString(),
        fileName: file.name
      });
      setIsAnalyzing(false);
      toast.success('Resume analysis complete!');
    }, 2000);
  };

  return (
    <DashboardLayout role={user?.role} userName={user?.fullname}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl mb-2 text-slate-900 font-bold">Resume Analysis</h1>
          <p className="text-slate-600">Get AI-powered insights to improve your resume and ATS score</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Upload Section */}
          <Card className="p-6 lg:col-span-2">
            <h2 className="text-xl mb-4 text-slate-900 font-semibold">Upload Your Resume</h2>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-red-500 transition-colors cursor-pointer">
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="hidden"
                id="resume-upload"
              />
              <label htmlFor="resume-upload" className="cursor-pointer">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-slate-700 font-medium">
                  {file ? file.name : 'Click to upload or drag and drop'}
                </p>
                <p className="text-sm text-slate-500 mt-1">PDF files only, up to 5MB</p>
              </label>
            </div>

            <Button 
              onClick={handleAnalyze}
              className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white"
              disabled={!file || isAnalyzing}
            >
              {isAnalyzing ? 'Analyzing...' : 'Analyze Resume'}
            </Button>

            {analysisResult && (
              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 text-green-700 mb-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-medium">Analysis Complete</span>
                </div>
                <p className="text-sm text-green-600">
                  {analysisResult.fileName} analyzed on {analysisResult.timestamp}
                </p>
              </div>
            )}
          </Card>

          {/* Score Card */}
          <Card className="p-6">
            <h3 className="font-semibold text-slate-900 mb-4">ATS Score</h3>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-500 mb-2">{currentScore}%</div>
              <Badge className="bg-green-100 text-green-700 border-0 mb-4">
                +{improvement}% improvement
              </Badge>
              <p className="text-sm text-slate-600 mb-4">
                Previous score: {previousScore}%
              </p>
              <Progress value={currentScore} className="h-2 mb-4" />
              <p className="text-xs text-slate-500">
                Based on {suggestions.length} criteria
              </p>
            </div>
          </Card>
        </div>

        {/* Analysis Breakdown */}
        <Card className="p-6">
          <h2 className="text-xl mb-4 text-slate-900 font-semibold">Analysis Breakdown</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {suggestions.map((item, index) => (
              <div key={index} className="p-4 border rounded-lg hover:bg-slate-50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {item.status === 'good' ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-yellow-500" />
                    )}
                    <h3 className="font-semibold text-slate-900">{item.category}</h3>
                  </div>
                  <span className="font-bold text-slate-900">{item.score}%</span>
                </div>
                <Progress value={item.score} className="h-1.5 mb-3" />
                <div className="space-y-1">
                  {item.tips.map((tip, tipIdx) => (
                    <div key={tipIdx} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-red-500 mt-1">•</span>
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Skills Gap Analysis */}
        <Card className="p-6">
          <h2 className="text-xl mb-4 text-slate-900 font-semibold">Skills Gap Analysis</h2>
          <p className="text-sm text-slate-600 mb-6">
            Comparison between your current skills and job market requirements for your target roles
          </p>
          <div className="space-y-4">
            {skillsGap.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 flex-1">
                    <span className="font-medium text-slate-900 min-w-[100px]">{item.skill}</span>
                    <div className="flex-1">
                      <div className="text-xs text-slate-500 mb-1">Your Level: {item.proficiency}%</div>
                      <Progress value={item.proficiency} className="h-2" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-24">
                  <span className="text-xs text-slate-500">Required: {item.required}%</span>
                  <Progress value={item.required} className="h-1.5 flex-1" />
                  {item.gap > 0 && (
                    <Badge className="bg-orange-100 text-orange-700 border-0 ml-2">
                      Gap: {item.gap}%
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recommendations */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-start gap-3 mb-3">
              <Zap className="w-6 h-6 text-yellow-500 mt-1" />
              <h3 className="text-lg font-semibold text-slate-900">Quick Wins</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✓</span>
                <span>Add LinkedIn URL and portfolio link to header</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✓</span>
                <span>Expand bullet points with metrics and results</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✓</span>
                <span>Include relevant certifications and achievements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✓</span>
                <span>Use action verbs to strengthen descriptions</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-3 mb-3">
              <TrendingUp className="w-6 h-6 text-green-500 mt-1" />
              <h3 className="text-lg font-semibold text-slate-900">Long-term Improvements</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">→</span>
                <span>Build projects to demonstrate React and TypeScript skills</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">→</span>
                <span>Complete AWS certification course</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">→</span>
                <span>Contribute to open-source projects</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">→</span>
                <span>Get internship experience in target companies</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}

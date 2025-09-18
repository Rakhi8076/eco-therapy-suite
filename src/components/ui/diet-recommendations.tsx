import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { UtensilsCrossed, Apple, Coffee, Moon, CheckCircle, AlertCircle } from 'lucide-react';

interface FoodItem {
  name: string;
  category: string;
  constitution: 'vata' | 'pitta' | 'kapha';
  effect: 'good' | 'moderate' | 'avoid';
  description: string;
}

export const DietRecommendations = ({ trigger }: { trigger: React.ReactNode }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const constitutionBalance = {
    vata: 65,
    pitta: 45,
    kapha: 75
  };

  const mealPlan = {
    breakfast: [
      { time: '7:00 AM', item: 'Warm oatmeal with ghee and honey', calories: 320 },
      { time: '7:30 AM', item: 'Herbal tea (ginger-tulsi)', calories: 5 }
    ],
    lunch: [
      { time: '12:30 PM', item: 'Quinoa with steamed vegetables', calories: 450 },
      { time: '1:00 PM', item: 'Buttermilk with cumin', calories: 80 }
    ],
    dinner: [
      { time: '7:00 PM', item: 'Khichdi with clarified butter', calories: 380 },
      { time: '8:00 PM', item: 'Warm milk with turmeric', calories: 120 }
    ]
  };

  const recommendedFoods: FoodItem[] = [
    {
      name: 'Basmati Rice',
      category: 'Grains',
      constitution: 'vata',
      effect: 'good',
      description: 'Easy to digest, warming and grounding for Vata'
    },
    {
      name: 'Ghee',
      category: 'Fats',
      constitution: 'vata',
      effect: 'good',
      description: 'Nourishing and lubricating, balances dryness'
    },
    {
      name: 'Coconut',
      category: 'Fruits',
      constitution: 'pitta',
      effect: 'good',
      description: 'Cooling and sweet, reduces Pitta heat'
    },
    {
      name: 'Ginger',
      category: 'Spices',
      constitution: 'kapha',
      effect: 'good',
      description: 'Warming and stimulating, improves digestion'
    },
    {
      name: 'Ice Cream',
      category: 'Dairy',
      constitution: 'kapha',
      effect: 'avoid',
      description: 'Cold and heavy, increases Kapha imbalance'
    }
  ];

  const getEffectColor = (effect: string) => {
    switch (effect) {
      case 'good':
        return 'text-success';
      case 'moderate':
        return 'text-warning';
      case 'avoid':
        return 'text-destructive';
      default:
        return 'text-muted-foreground';
    }
  };

  const getEffectIcon = (effect: string) => {
    switch (effect) {
      case 'good':
        return <CheckCircle className="h-4 w-4 text-success" />;
      case 'avoid':
        return <AlertCircle className="h-4 w-4 text-destructive" />;
      default:
        return null;
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <UtensilsCrossed className="h-5 w-5 text-primary" />
            <span>Personalized Diet Plan</span>
          </DialogTitle>
        </DialogHeader>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="meals">Meal Plan</TabsTrigger>
            <TabsTrigger value="foods">Food Guide</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Constitution Balance</CardTitle>
                <CardDescription>Your current dosha balance based on recent assessments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Vata (Air + Space)</span>
                      <span className="text-sm">{constitutionBalance.vata}%</span>
                    </div>
                    <Progress value={constitutionBalance.vata} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">
                      Good balance - continue warm, cooked foods
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Pitta (Fire + Water)</span>
                      <span className="text-sm">{constitutionBalance.pitta}%</span>
                    </div>
                    <Progress value={constitutionBalance.pitta} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">
                      Slightly elevated - avoid spicy, hot foods
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Kapha (Earth + Water)</span>
                      <span className="text-sm">{constitutionBalance.kapha}%</span>
                    </div>
                    <Progress value={constitutionBalance.kapha} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">
                      Well balanced - maintain current diet
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Today's Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span>Drink warm water throughout the day</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span>Eat largest meal at lunch time</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span>Include digestive spices in meals</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">This Week's Goals</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <AlertCircle className="h-4 w-4 text-warning" />
                      <span>Reduce cold beverages</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <AlertCircle className="h-4 w-4 text-warning" />
                      <span>Add more warming spices</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <AlertCircle className="h-4 w-4 text-warning" />
                      <span>Maintain regular meal times</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="meals" className="space-y-4">
            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Coffee className="h-5 w-5" />
                    <span>Breakfast</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {mealPlan.breakfast.map((meal, index) => (
                    <div key={index} className="flex justify-between items-center py-2">
                      <div>
                        <p className="font-medium">{meal.item}</p>
                        <p className="text-sm text-muted-foreground">{meal.time}</p>
                      </div>
                      <Badge variant="outline">{meal.calories} cal</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Apple className="h-5 w-5" />
                    <span>Lunch</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {mealPlan.lunch.map((meal, index) => (
                    <div key={index} className="flex justify-between items-center py-2">
                      <div>
                        <p className="font-medium">{meal.item}</p>
                        <p className="text-sm text-muted-foreground">{meal.time}</p>
                      </div>
                      <Badge variant="outline">{meal.calories} cal</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Moon className="h-5 w-5" />
                    <span>Dinner</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {mealPlan.dinner.map((meal, index) => (
                    <div key={index} className="flex justify-between items-center py-2">
                      <div>
                        <p className="font-medium">{meal.item}</p>
                        <p className="text-sm text-muted-foreground">{meal.time}</p>
                      </div>
                      <Badge variant="outline">{meal.calories} cal</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="foods" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Food Recommendations</CardTitle>
                <CardDescription>Foods categorized by their effect on your constitution</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recommendedFoods.map((food, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        {getEffectIcon(food.effect)}
                        <div>
                          <p className="font-medium">{food.name}</p>
                          <p className="text-sm text-muted-foreground">{food.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="mb-1">{food.category}</Badge>
                        <p className={`text-xs font-medium ${getEffectColor(food.effect)}`}>
                          {food.effect === 'good' ? 'Recommended' : 
                           food.effect === 'moderate' ? 'Moderate' : 'Avoid'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
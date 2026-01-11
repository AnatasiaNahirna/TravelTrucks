import Camper from "@/types/camper";

export const camperCategories: { key: keyof Camper, icon: string; title: string }[] = [
    { key:'transmission', icon: 'automatic', title: 'Automatic' },
    { key: 'AC', icon: 'ac', title: 'AC' },
    { key:'engine', icon: 'petrol', title: 'Petrol' },
    { key: 'kitchen', icon: 'kitchen', title: 'Kitchen' },
    { key: 'radio', icon: 'radio', title: 'Radio' },
    { key: 'bathroom', icon: 'bathroom', title: 'Bathroom' },
    { key:'refrigerator', icon: 'refrigerator', title: 'Refrigerator' },
    { key:'microwave', icon: 'microwave', title: 'Microwave' },
    { key:'gas', icon: 'gas', title: 'Gas' },
    { key:'water', icon: 'water', title: 'Water' },
];

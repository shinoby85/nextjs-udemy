import Link from "next/link";

export default function MealsPage() {
    return (
        <main style={{color: 'white', textAlign: 'center'}}>
            <h1>Meals Page</h1>
            <p><Link href="/meals/meal-1">Meal 1</Link></p>
            <p><Link href="/meals/meal-2">Meal 2</Link></p>
            <p><Link href="/meals/meal-3">Meal 3</Link></p>
        </main>
    )
}
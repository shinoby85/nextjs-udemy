export default async function MealPage({params}) {
    const {mealId} = await params;
    return (
        <main style={{color: 'white', textAlign: 'center'}}>
            <h1>Meal Page</h1>
            <p>{mealId}</p>
        </main>
    )
}
const name = ['Yauheni', 'Ann']
export default function Post() {
    const chosenName = Math.random() > 0.5 ? name[0] : name[1];
    return (
        <div>
            <p>{chosenName}</p>
            <p>ReactJS is awesome!</p>
        </div>
    );
}
let entity = "Skeleton";

function jump(entity) {
    // local scope
    // entity shadows global entity
    console.log(`${entity} is jumping`);
}

jump("Player 1");
jump("Player 2");
jump(entity);

console.log(jump("gretta"));

/*
{

    {
        let x = 7;
        {
            console.log(x);
            x++;
            console.log(x);
            {
                x++;
                {
                    let x = 9;
                    console.log(x);
                }
            }
        }
        console.log(x);
    }
    console.log(x);
}
*/
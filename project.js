const smallCups = document.querySelectorAll('.cup-small')
const liters = document.querySelectorAll('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach
(
    (cup, id) => {
    cup.addEventListener('click', () => highlightCups(id));
}
);

function highlightCups(id) 
{
    smallCups.forEach((cup, id2) => 
    {
        if (id2 <= id) 
        {
            cup.classList.add('full');
        } else 
        {
            cup.classList.remove('full');
        }
    });
    updateBigCup();
}

function updateBigCup()
{
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;

    percentage.style.height = `${(fullCups / totalCups) * 100}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;

    if (fullCups === totalCups)
    {
        remained.style.visibility = 'hidden';
    }
    else
    {
        remained.style.visibility = 'visible';
        liters.innerText = `${2-(0.25 * fullCups)}L`;
    }
}

updateBigCup();















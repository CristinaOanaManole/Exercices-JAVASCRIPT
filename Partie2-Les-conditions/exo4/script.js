let number =  parseInt(prompt(" Donner une note entre 0 et 10" ));

if (parseInt(number) <4) 
{
    alert("Nul");
    } 
    else if (parseInt(number) <6) 
{
    alert ("Moyen");
    } 
    else if (parseInt(number) <8) 
{ 
    alert ("Assez bien");
    } 
    else if (parseInt(number) <10) 
{
    alert ("Bien");
    } 
    else if (parseInt(number) ==10)
{
    alert ("Excellent") ;   
}
    else 
{
    alert ("ceci n'est pas une note entre 0 et 10");
}
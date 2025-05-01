function calctotal()
{
    var x = parseInt(document.tickets.adult.value);
    var y = parseInt(document.tickets.children.value);
    document.tickets.total.value = x*10 + y*5;
}
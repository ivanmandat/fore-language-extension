# Autocomplete.Selected

Autocomplete.Selected
-


# Autocomplete.Selected


## Синтаксис


Selected: function (sender, args)


## Параметры


sender. Источник
 события;


args. Информация
 о событии, экземпляр класса PP.AutocompleteEventArgs. Доступный аргумент:
 SelectionIndex
  - индекс выбранной подсказки.


## Описание


Событие Selected наступает после
 выбора подсказки из меню.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [Autocomplete](../../Components/Autocomplete/Autocomplete.htm)
 с наименованием «autocomplete» (см. «[Конструктор
 Autocomplete](Constructor_Autocomplete.htm)»). В теге BODY добавьте элемент DIV c идентификатором
 «Div1». В систему автозавершения должен быть включен элемент управления
 с идентификатором «TB1». Добавим кнопку, при нажатии на которую будет
 отображаться список подсказок для компонента с идентификатором «TB1»,
 и обработчик события Selected:


//добавляем кнопку, при нажатии на которую будет отображаться список подсказок для компонента с идентификатором «TB1»:
var but1 = new PP.Ui.Button(
{
    ParentNode: document.getElementById("Div1"),
    Click: function ()
    {
        autocomplete.showSuggestion("TB1")
    },
    Content: "Show"
});
//При выборе пункта меню с подсказками будет выдаваться сообщение «Item (индекс выбранной подсказки) is selected»
autocomplete.Selected.add(function (sender, args)
{
    alert("Item " + args.SelectionIndex + " is selected")
});
//При открытии меню в консоль браузера будет выводиться экземпляр класса PP.AutocompleteEventArgs
autocomplete.Opened.add(function (sender, args)
{
    console.log(args)
});

После выполнения примера при нажатии на кнопку «Show» отобразится меню
 со всеми подсказками, установленными для элемента управления с идентификатором
 «TB1». При открытии меню в консоль браузера будет выводиться экземпляр
 класса PP.AutocompleteEventArgs. Выберите один из вариантов - на экран
 будет выведено сообщение «Item (индекс выбранной подсказки) is selected».


См. также:


[Autocomplete](Autocomplete.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

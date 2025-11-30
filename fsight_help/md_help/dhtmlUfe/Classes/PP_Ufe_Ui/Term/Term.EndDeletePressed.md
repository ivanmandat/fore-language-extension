# Term.EndDeletePressed

Term.EndDeletePressed
-


# Term.EndDeletePressed


## Синтаксис


EndDeletePressed: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии.


## Описание


Событие EndDeletePressed наступает
 после нажатия клавиши DELETE, когда курсор располагается после последнего
 символа терма.


## Пример


Для выполнения примера необходимо наличие на html-странице ссылок на
 файлы сценариев PP.js, PP.Ufe.js и файлы стилей PP.css, PP.Ufe.css, в
 теге <body> html-страницы элемента <div> с идентификатором
 «termEdit». Создадим редактор термов и добавим строку «20+30»:


function createTerm() {
    // Создаем редактор выражений
    termEdit = new PP.Ufe.Ui.TermEdit({
        // Устанавливаем родительский элемент
        ParentNode: document.getElementById("termEdit")
    });
    // Добавляем термы
    termEdit.insertString("20+30");
}
Установим курсор на терм с содержимым «20». Добавим к выбранному терму
 обработчик события [EndDeletePressed](Term.EndDeletePressed.htm), а
 редактору выражения установим обработчик нажатия клавиши клавиатуры:


// Получаем выбранный терм
term = termEdit.getSelectedTerm();
// Устанавливаем выбранному терму обработчик события нажатия на клавишу DELETE после терма
term.StartBackspacePressed.add(function (sender, args) {
    console.log("Нажата клавиша DELETE после выбранного терма");
});
Установим курсор после терма с содержимым «20» и нажмем на кнопку
 DELETE. В результате будет удален терм с содержимым «+»:


![](Term_StartBackspacePressed.png)


В консоль будет выведено сообщение о нажатии на клавишу DELETE после
 выбранного терма:


Нажата клавиша DELETE после выбранного терма


См. также:


[Term](Term.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

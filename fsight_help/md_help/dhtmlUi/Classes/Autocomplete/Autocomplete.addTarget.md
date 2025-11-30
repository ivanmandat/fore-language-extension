# Autocomplete.addTarget

Autocomplete.addTarget
-


# Autocomplete.addTarget


## Синтаксис


addTarget (target)


## Параметры


target. JSON-объект с параметрами автозавершения для указанного элемента управления. Задаются следующие параметры:


-
Control. Элемент управления, который необходимо добавить в систему автозавершения. Экземпляр PP.Ui.[Control](../Control/Control.htm).


-
[Active](Autocomplete.Active.htm). Определяет, будет ли отображаться список вариантов: true – будет отображаться, false – не будет. По умолчанию установлено значение false. Для AlwaysShow должно быть установлено значение true;


-
[MatchCase](Autocomplete.MatchCase.htm). Определяет, будет дли учитываться регистр: true - регистр учитывается, false – не учитывается. По умолчанию установлено значение false;


-
[Suggestions](Autocomplete.Suggestions.htm). Определяет массив вариантов автозавершения для указанного элемента управления;


-
AlwaysShow. Определяет, будет ли отображаться список вариантов: true – будет отображаться, false – не будет. По умолчанию установлено значение false. Для Active должно быть установлено значение true.


## Описание


Метод addTarget добавляет элемент управления в систему автозавершения.


## Пример


Для выполнения примера предполагается наличие на странице компонента [Autocomplete](../../Components/Autocomplete/Autocomplete.htm) с наименованием «autocomplete» (см. «[Конструктор Autocomplete](Constructor_Autocomplete.htm)»). В теге BODY добавьте элемент DIV с идентификаторами «example2». Добавим компонент TextBox в систему автозавершения:


autocomplete.addTarget({
        //поле ввода
        Control: number = new PP.Ui.TextBox({
            ParentNode: document.getElementById("example2"),
            Width: 100,
            Id: "tb"
        }),
        AlwaysShow: true,
        MinAutoFindSymbolsCount: 2,
        Active: true,
        //без учета регистра
        MatchCase: false,
        //возможные варианты для автозавершения
        Suggestions:
	[
	{
	    Text: "Austria"
	},
	{
	    Text: "Australia"
	},
	{
	    Text: "Andorra"
	}
	]
    }
)

После выполнения примера на страницу будет добавлен компонент TextBox, для которого будет применяться автозавершение.


См. также:


[Autocomplete](Autocomplete.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

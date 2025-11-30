# LanerBoxView.isEditing

LanerBoxView.isEditing
-


# LanerBoxView.isEditing


## Синтаксис


isEditing ();


## Описание


Метод isEditing возвращает признак, что таблица находится в состоянии радактирования значения ячейки.


## Пример


Для выполнения примера предполагается наличие на странице компонента [LanerBox](../../../Components/TimeSeries/LanerBox/LanerBox.htm) с наименованием «lanerbox» (см. «[Конструктор LanerBox](../LanerBox/Constructor_LanerBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


// Создаем кнопку
	var btnIsEditing = new PP.Ui.Button({
	ParentNode: "params", //родительский узел DOM
	Content: "IsEditing", //подпись
	Click: PP.Delegate(function(sender, args){ //обработчик нажатия
	console.log("Получаем значение признака, что таблица находится в состоянии радактирования значения ячейки")
	var isEditing = lanerbox.isEditing();
	console.log(isEditing);
	}, this)
	});

После выполнения примера на html-странице будет добавлена кнопка «IsEditing», при нажатии на которую в консоль браузера будет выведен результат проверки на то, что таблица находится в состоянии радактирования значения ячейки:


false


См. также:


[LanerBoxView](LanerBoxView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# NumberFormat.format

NumberFormat.format
-


# NumberFormat.format


## Синтаксис


format (number);


## Параметры


number. Число.


## Описание


Метод format возвращает строковое
 представление числа.


## Пример


Для выполнения примера предполагается наличие на html-странице ссылок
 на библиотеку PP.js и стили PP.css. Добавим числовой редактор:


//Создаем числовой редактор
var ne = new PP.Ui.NumberEdit({
    ParentNode: document.body,
    Width: 50
});
//При изменении значения в числовом редакторе в консоль будет выдаваться строковое представление введенного числа
ne.AfterValueChange.add(function (sender, args) {
    numbForm = new PP.NumberFormat();
    value = args.NewValue;
    formValue = numbForm.format(value);
    console.log("Строковое значение: " + formValue)
});

После выполнения примера на странице будет размещен компонент [NumberEdit](dhtmlUi.chm::/Components/NumberEdit/NumberEdit.htm),
 имеющий следующий вид:


![](numberEdit.gif)


При изменении значения числового редактора в консоль будет выводиться
 строковое значение введенного числа.


См. также:


[NumberFormat](NumberFormat.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

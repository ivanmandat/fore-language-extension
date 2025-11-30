# NumberFormat.formatTableValue

NumberFormat.formatTableValue
-


# NumberFormat.formatTableValue


## Синтаксис


formatTableValue (tableValue);


## Параметры


tableValue. Строка, содержащая число с разделителем разрядов « » или десятичным разделителем «,».


## Описание


Метод formatTableValue возвращает строковое представление числа с групповым разделителем « » или десятичным разделителем «,».


## Пример


Для выполнения примера предполагается наличие на html-странице ссылок на библиотеку PP.js и стили PP.css. Добавим текстовую область:


//Создаем текстовую область
ta = new PP.Ui.TextArea({
    ParentNode: document.body,
    Content: "Введите число"
});
//При изменении содержимого в текстовой области в консоль будет выдаваться введенное значение и строковое представление введенного числа
ta.TextChanged.add(function (sender, args) {
    value = args.Value;
    numbForm = new PP.NumberFormat();
    formValue = numbForm.formatTableValue(value);
    console.log(formValue);
});

После выполнения примера на странице будет размещена текстовая область. Введите туда число с разделителем разрядов « » и/или десятичным разделителем «,», например 10 000,456. В консоль браузера будет выведено введенное число и число, возвращенное методом formatTableValue:


10 000,456


100004560


См. также:


[NumberFormat](NumberFormat.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

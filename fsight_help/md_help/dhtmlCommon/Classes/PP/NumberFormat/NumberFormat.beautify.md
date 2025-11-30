# NumberFormat.beautify

NumberFormat.beautify
-


# NumberFormat.beautify


## Синтаксис


beautify (value: Number, min: Number, max: Number):
 Number;


## Параметры


value. Число;


min. Нижняя граница диапазона
 изменения значения. По умолчанию значение параметра меньше значения параметра
 value на 1%;


max. Верхняя граница диапазона
 изменения значения. По умолчанию значение параметра больше значения параметра
 value на 1%.


## Описание


Статический метод beautify возвращает
 число в более удобочитаемой форме.


## Пример


Для выполнения примера создайте html-страницу и в теге <head> добавьте
 ссылки на следующие js- и css-файлы:


	- PP.js;


	- PP.css.


В конце документа в теге <body>
 в качестве значения атрибута «onLoad»
 укажите имя функции, которая выполняется после окончания загрузки тела
 страницы.


<body class="PPNoSelect" onselectstart="return false;" onload="NumberEditCreate()">
</body>
В теге <head> добавьте
 следующий скрипт:


function NumberEditCreate() {
	var ne = new PP.Ui.NumberEdit({
		ParentNode: document.body,
		Width: 200
	});
	// При изменении значения в числовом редакторе в консоль будет выводиться более удобочитаемое представление введенного числа
	ne.AfterValueChange.add(function (sender, args) {
		value = args.NewValue;
		formValue = PP.NumberFormat.beautify(value);
		console.log("«Красивое» значение: " + formValue)
	});
}
В результате выполнения примера на странице будет размещен компонент
 [NumberEdit](dhtmlUi.chm::/Components/NumberEdit/NumberEdit.htm).
 После ввода значения в компонент в консоль браузера выведется введённое
 число в более удобочитаемой форме.


См. также:


[NumberFormat](NumberFormat.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

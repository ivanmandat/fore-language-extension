# WbkDataView.setActiveSheet

WbkDataView.setActiveSheet
-


# WbkDataView.setActiveSheet


## Синтаксис


setActiveSheet (keyOrId, reInit);


## Параметры


keyOrId. Ключ или идентификатор
 листа;


reInit. Признак, нужно ли принудительно
 изменять активный лист независимо от текущего состояния. Если установлено
 значение true, нужно изменять,
 false - не нужно изменять.


## Описание


Метод setActiveSheet определяет
 ключ активного листа.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WbkDataBox](../../../Components/TimeSeries/WbkDataBox/WbkDataBox.htm)
 с наименованием «wbkDataBox» (см. «[Конструктор
 WbkDataBox](../WbkDataBox/Constructor_WbkDataBox.htm)»), наличие рабочей книги с ключом 806723, а в обработчике
 события открытия документа необходимо добавить следующий код:


//Создаем кнопку с надписью "Сменить лист" для демонстрации работы метода setActiveSheet()
var actShButt = new PP.Ui.Button({
	ParentNode: 'example', //родительский узел DOM
	Content: "Сменить лист", //подпись
	Click: PP.Delegate(onClick)
});
//обьявляем вспомогательную переменную
var shCount = 1;
//Обработчик события нажатия кнопки "Сменить лист"
function onClick() {
	if(shCount <=3)
		{
			wbkDataBox.setActiveSheet(shCount, false);
			shCount++;
		}
	else
		{
			shCount = 1;
			wbkDataBox.setActiveSheet(shCount, false);
		}

После выполнения примера на html-странице
 будет размещена кнопка «Сменить лист», при нажатии на которую будет изменен
 активный лист.


См. также:


[WbkDataView](WbkDataView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

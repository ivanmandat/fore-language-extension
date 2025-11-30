# ChartCanvasSerie.StackId

ChartCanvasSerie.StackId
-


# ChartCanvasSerie.StackId


## Синтаксис


StackId: Number | String;


## Описание


Свойство StackId определяет
 идентификатор накопления диаграммы.


## Комментарии


Значение свойства устанавливается из JSON и возвращается с помощью метода
 getStackId.


Допустимые значения идентификаторов накопления диаграммы приведены на
 странице описания свойства [Chart.Stacking](../Chart/Chart.Stacking.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [Chart](../../../Components/Chart/Chart.htm) с наименованием
 «chart» (см. «[Пример
 создания линейной диаграммы](../../../Components/Chart/ChartLine.htm)»). Отобразим линейную диаграмму в виде
 диаграммы с абсолютным накоплением:


PP.Object.defineProps(PP.Ui.Chart, ["Stacking"], true);
PP.Object.defineProps(PP.Ui.ChartCanvasSerie, ["StackId"], true);
// Используем диаграмму с абсолютным накоплением
chart.setStacking("Absolute");
for (var i in chart.getSeries()) {
    var serie = chart.getSeries()[i];
    // Устанавливаем идентификатор накопления для ряда данных
    serie.setStackId("Absolute");
}
// Перерисовываем диаграмму
chart.redraw(true);
В результате выполнения примера исходная диаграмма была преобразована
 в диаграмму с абсолютным накоплением:


![](ChartCanvasSerie_StackId.png)


См. также:


[ChartCanvasSerie](ChartCanvasSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

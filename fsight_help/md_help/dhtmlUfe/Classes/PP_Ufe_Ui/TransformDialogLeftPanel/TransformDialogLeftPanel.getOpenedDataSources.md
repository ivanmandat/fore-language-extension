# TransformDialogLeftPanel.getOpenedDataSources

TransformDialogLeftPanel.getOpenedDataSources
-


# TransformDialogLeftPanel.getOpenedDataSources


## Синтаксис


getOpenedDataSources();


## Описание


Метод getOpenedDataSources возвращает
 объект с информацией об открытых источниках данных, из которых извлекаются
 данные об элементах измерения.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TransformDialog](../../../Components/TransformDialog/TransformDialog.htm)
 с наименованием «dialog» (см. «[Пример
 создания компонента TransformDialog](../../../Components/TransformDialog/Example_TransformDialog.htm)»). Получим название изменяемого
 элемента измерения:


// Получаем массив открытых источников данных
var sources = dialog._LeftPanel.getOpenedDataSources();
if(sources.length > 0) {
    // Получаем загруженный элемент измерения
    var expr = dialog._LeftPanel.getSummaryExpression(true);
    // Получаем наименование изменяемого элемента измерения
    var source = sources[0];
    for (var i in source.Dims) {
        if (source.Dims[i].getId() === expr.Expr.Formula[1].n) {
            console.log("Наименование изменяемого элемента измерения: " +
                source.Dims[i].getElem(expr.Expr.Formula[1].v).n);
        }
    }
} else {
    console.log("Открытые источники данных отсутствуют");
}
В результате в консоль было выведено название открытого источника данных:


Наименование изменяемого элемента измерения: ВАЛОВОЙ
 РЕГИОНАЛЬНЫЙ ПРОДУКТ


См. также:


[TransformDialogLeftPanel](TransformDialogLeftPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

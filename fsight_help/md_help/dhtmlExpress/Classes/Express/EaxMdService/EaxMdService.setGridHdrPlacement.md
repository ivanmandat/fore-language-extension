# EaxMdService.setGridHdrPlacement

EaxMdService.setGridHdrPlacement
-


# EaxMdService.setGridHdrPlacement


## Синтаксис


setGridHdrPlacement(report: PP.Exp.[EaxDocument](../EaxDocument/EaxDocument.htm),
 args: Object, callback: PP.Delegate, errCallback: PP.Delegate);


## Параметры


*report.* Документ экспресс-отчёта;


*args.* Аргументы;


*callback.* Возвратная функция;


errCallback. Возвратная функция
 в случае ошибки.


## Описание


Метод setGridHdrPlacement устанавливает
 настройки размещения измерений в шапке и боковике таблицы.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной таблицей в рабочей
 области экспресс-отчёта.


// Задаем аргументы
args = {
  "hdrPlacementSettings": {
    "partDesc": {
      "part": "LeftHeader"
    },
    "placement": 0,
    "hierarchical": 1,
    "separated": 2,
    "duplicateParent": 2,
    "collapseChildren": 2,
    "childrenBeforeParents": 2,
    "stairsHierarchy": false,
    "autoIndent": 1,
    "indentValue": 3,
    "displaySortIcons": 0
  }
}
// Зададим параметры размещения
eaxMdService.setGridHdrPlacement(eaxAnalyzer, args);
// Перерисовываем
expressBox.getDataView().refreshAll();

В результате выполнения примера были заданы настройки размещения боковика
 таблицы.


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

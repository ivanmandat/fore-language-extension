# EaxMdService.setHierarchy

EaxMdService.setHierarchy
-


# EaxMdService.setHierarchy


## Синтаксис


setHierarchy(report, meta, operation, callback,
 errorCallback);


## Параметры


report. [PP.Exp.EaxAnalyzer](../EaxAnalyzer/EaxAnalyzer.htm).
 Экземпляр экспресс отчета.


meta. Object.
 Метаданные операции.


operation. [PP.Exp.EaxHierarchiesOp](../../../Enums/EaxHierarchiesOp.htm).
 Тип операции.


callback. PP.Delegate
 | Function. Функция обратного
 вызова.


errorCallback. PP.Delegate
 | Function. Функция обратного
 вызова в случае ошибки.


## Описание


Метод setHierarchy выполняет
 операции с пользовательской иерархией.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с
 наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Экспресс отчет должен содержать
 измерение с пользовательской иерархией. Обнулим пользовательскую иерархию:


// Получим измерение с пользовательской иерархией
dim = eaxAnalyzer.getDims()[2];
// Получим ключ измерения
dmK = dim.getKey();
// Определим метаданные операции
meta = {
  its: {
    Item: [{
      arg: {
        dimkey: dmK
      },
      k: -1
    }]
  }
};
// Определим выполняемую операцию
Op = PP.Exp.EaxHierarchiesOp.ClearAll;
// Обнулим иерархию
eaxMdService.setHierarchy(eaxAnalyzer, meta, Op);
В результате выполнения примера иерархия измерения была восстановлена.


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

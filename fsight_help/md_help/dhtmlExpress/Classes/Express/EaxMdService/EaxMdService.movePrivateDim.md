# EaxMdService.movePrivateDim

EaxMdService.movePrivateDim
-


# EaxMdService.movePrivateDim


## Синтаксис


movePrivateDim(report: PP.Exp.[EaxDocument](../EaxDocument/EaxDocument.htm),
 metadata: Object, callback: PP.Delegate);


## Параметры


*report.* Документ экспресс-отчёта;


*metadata.* Метаданные
 операции;


*callback.* Возвратная
 функция.


## Описание


Метод movePrivateDim перемещает
 частное измерение вверх/вниз.


## Комментарии


Метод предназначен для внутреннего использования.


В параметре metadata содержится объект со следующими полями:


  metadata = {
    sourceKey: 10206, // Ключ источника
    dimKey: 10200, // Ключ частного измерения
    indexFrom: 1, // Индекс позиции, с которой перемещается измерение
    indexTo: 0, // Индекс позиции, куда перемещается измерение
    swap: false // Признак смены мест
  }

## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Для экспресс-отчета должны быть
 заданы как минимум два источника данных и два частных измерения.


// Получим панель частных измерений
var items = expressBox.getPropertyBarView().getDimBarMasterView().getItems();
var dimBarPrivateMP = null;
for (var i in items) {
    if (items[i].getTypeName() == "EaxDimBarPrivateMP") {
        dimBarPrivateMP = items[i];
    }
};
if (dimBarPrivateMP != null) {
    // Получим ключ измерения и источника
    var dim = eaxAnalyzer.getSourcePrivateDims(1)[1];
    var key = dim.k;
    var sKey = eaxAnalyzer.getSourceKey();
    // Переведем частное
    var metadata = {
    sourceKey: sKey,
    dimKey: key,
    indexFrom: 1,
    indexTo: 0,
    swap: false
    };
    // Инициируем запрос изменения частных измерений
    eaxMbService.movePrivateDim(eaxAnalyzer, metadata);
};

В результате выполнения примера частое измерение экспресс-отчёта было
 сдвинуто на другое место.


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

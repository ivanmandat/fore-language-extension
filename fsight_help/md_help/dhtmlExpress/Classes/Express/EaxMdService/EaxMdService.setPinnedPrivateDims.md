# EaxMdService.setPinnedPrivateDims

EaxMdService.setPinnedPrivateDims
-


# EaxMdService.setPinnedPrivateDims


## Синтаксис


setPinnedPrivateDims(report: PP.Exp.[EaxDocument](../EaxDocument/EaxDocument.htm),
 metadata: Object, callback: PP.Delegate);


## Параметры


*report.* Документ экспресс-отчёта;


*metadata.* Настройки
 частных измерений;


*callback.* Возвратная
 функция.


## Описание


Метод setPinnedPrivateDims переводит
 частные измерения в фиксированные и обратно.


## Комментарии


Метод предназначен для внутреннего использования.


В параметре metadata содержится объект со следующими полями:


  metadata = {
    dimkey: 10200, // Ключ частного измерения
    sourceKey: 1, // Ключ источника
    value: true // При значении true - переводит в фиксированное частное, при значении false - переводит в нефиксированное
  }

## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Для экспресс-отчета должны быть
 заданы как минимум два источника данных.


// Получим панель частных измерений
var items = expressBox.getPropertyBarView().getDimBarMasterView().getItems();
var dimBarPrivateMP = null;
for (var i in items) {
    if (items[i].getTypeName() == "EaxDimBarPrivateMP") {
        dimBarPrivateMP = items[i];
    }
};
if (dimBarPrivateMP != null) {
    // Получим ключ измерения
    var dim = eaxAnalyzer.getSourcePrivateDims(1)[0];
    var key = dim.k;
    // Переведем частное измерение в фиксированные
    var metadata = {
      dimkey: key,
      sourceKey: 1,
      value: true
    };
    // Инициируем запрос изменения частных измерений
    eaxMbService.setPinnedPrivateDims(eaxAnalyzer, metadata);
};

В результате выполнения примера частое измерения экспресс-отчёта стало
 фиксированным.


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

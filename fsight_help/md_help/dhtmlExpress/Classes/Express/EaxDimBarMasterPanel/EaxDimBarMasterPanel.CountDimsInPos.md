# EaxDimBarMasterPanel.CountDimsInPos

EaxDimBarMasterPanel.CountDimsInPos
-


**


# EaxDimBarMasterPanel.CountDimsInPos


## Синтаксис


CountDimsInPos: Number


## Описание


Свойство CountDimsInPos** задает и возвращает количество измерений в занимаемой позиции.


## Комментарий


Значение свойства **CountDimsInPos** также задается при помощи метода **setCountDimsInPos** и возвращается при помощи метода **getCountDimsInPos**.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Получим информацию об одном из измерений мастера управления отметкой - его ключ, наименование, индекс занимаемой позиции, положение, а также общее количество измерений в занимаемой позиции:


var dimBarMaster = expressBox.getPropertyBarView().getDimBarMasterView();
// Покажем панель
dimBarMaster.show();
// Индекс панели
var itemIndex = 0;
var hlDim = dimBarMaster.getItem(itemIndex);
// Получим ключ первого измерения
var dimKey = hlDim.getData();
var masterPanel = dimBarMaster.getPanelByDimKey(dimKey);
// Получим источник данных панели
var source = masterPanel.getSource();
console.log("Ключ измерения: " + source.getKey() + ", наименование: " + source.getName() + ";");
console.log("Количество измерений в занимаемой позиции: " + masterPanel.getCountDimsInPos() + ";");
console.log("Индекс позиции, в которой размещается измерение: " + masterPanel.getIndexPosition()  + ";");
console.log("Положение измерения: " + masterPanel.getPvtPosition()  + ".");

В результате выполнения примера была получена информация об измерении «Календарь» с ключом 109:


Ключ измерения: 2038, наименование: Календарь;


Количество измерений в занимаемой позиции: 2;


Индекс позиции, в которой размещается измерение: 0;


Положение измерения: Left.


См. также:


[EaxDimBarMasterPanel](EaxDimBarMasterPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

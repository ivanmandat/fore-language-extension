# TabSheetAdjustmentMgr.getProcessResizeCells

TabSheetAdjustmentMgr.getProcessResizeCells
-


**


# TabSheetAdjustmentMgr.getProcessResizeCells


## Синтаксис


getProcessResizeCells();


## Описание


Метод getProcessResizeCells**
 определяет, происходит ли изменение размера ячеек в данный момент.


## Комментарии


Метод возвращает значение true,
 если в данный момент происходит изменение размера ячеек, иначе - false.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 с наименованием «tabSheet» (см. «[Пример
 создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Если не происходит изменения размера
 ячеек в данный момент, то сбросим параметры указателя мыши и обновим таблицу.
 Иначе выведем соответствующее сообщение:


// Получаем менеджер, управляющий изменением размеров строк и столбцов таблицы
var tsam = tabSheet.getAdjustmentMgr();
// Определяет, происходит ли изменение размера ячеек в данный момент
var processFlag = tsam.getProcessResizeCells();
if (!processFlag) {
    // Cбросим параметры указателя мыши на исходный
    tsam.reset();
    // Обновим таблицу
    tsam.getTabSheet().rerender()
    console.log("Параметры указателя мыши сброшены, таблица обновлена.")
} else {
    console.log("В данный момент производится изменение размера ячеек таблицы.")
};

Если не происходит изменения размера ячеек в данный момент, то в результате
 выполнения примера параметры указателя мыши будут сброшены, а таблица
 будет обновлена.


См. также:


[TabSheetAdjustmentMgr](TabSheetAdjustmentMgr.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

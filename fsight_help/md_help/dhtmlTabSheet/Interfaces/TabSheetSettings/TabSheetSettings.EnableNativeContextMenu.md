# TabSheetSettings.EnableNativeContextMenu

TabSheetSettings.EnableNativeContextMenu
-


# TabSheetSettings.EnableNativeContextMenu


## Синтаксис


EnableNativeContextMenu: Boolean;


## Описание


Свойство EnableNativeContextMenu
 определяет возможность вызова контекстного меню браузера для работы
 с таблицей.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setEnableNativeContextMenu,
 а возвращается с помощью метода getEnableNativeContextMenu.


Если свойство имеет значение true,
 то возможно вызвать контекстное меню браузера для работы с таблицей, иначе
 - контекстное меню вызвать нельзя.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TabSheet](../../Components/TabSheet/TabSheet/TabSheet.htm)
 с наименованием «tabSheet» (см. «[Пример
 создания компонента TabSheet](../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Разрешим использование контекстного
 меню браузера, запретим отмену и возврат изменений таблицы:


// Разрешим использование контекстного меню браузера
tabSheet.setEnableNativeContextMenu(true);
// Запретим отмену и возврат изменений таблицы
tabSheet.setUndoRedoEnable(false);
В результате при щелчке правой кнопки мыши по таблице будет вызвано контекстное
 меню браузера.


Также после изменении значений ячеек таблицы команда отмены изменений,
 которая вызывается сочетанием клавиш CTRL+Z работать не будет.


См. также:


[TabSheetSettings](TabSheetSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

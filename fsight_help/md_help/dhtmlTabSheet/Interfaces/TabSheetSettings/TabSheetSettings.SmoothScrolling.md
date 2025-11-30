# TabSheetSettings.SmoothScrolling

TabSheetSettings.SmoothScrolling
-


# TabSheetSettings.SmoothScrolling


## Синтаксис


SmoothScrolling: Boolean;


## Описание


Свойство SmoothScrolling определяет
 признак использования плавной прокрутки.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setSmoothScrolling,
 а возвращается с помощью метода getSmoothScrolling.


Если свойство имеет значение true,
 то будет использоваться плавная прокрутка, иначе будет использоваться
 обычная прокрутка.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TabSheet](../../Components/TabSheet/TabSheet/TabSheet.htm)
 с наименованием «tabSheet» (см. «[Пример
 создания компонента TabSheet](../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Отобразим элемент изменения размера
 выделения и выделим диапазон ячеек. Разрешим использование плавной прокрутки
 и выведем шаг плавной прокрутки. Затем проведем серию изменений значений
 ячеек, после чего отменим две последние операции:


// Отобразим элемент изменения размера выделения
tabSheet.setVisibleSelectionResizer(true);
// Выделим диапазон ячеек
tabSheet.getRangeFromString("A1:B1").select();
// Разрешим использование плавной прокрутки
tabSheet.setSmoothScrolling(true);
// Выведем значение шага плавной прокрутки
console.log("Шаг плавной прокрутки: " + tabSheet.getSmoothScrollStep());
// Установим количество операций, запоминающихся для последующего возврата
tabSheet.setUndoLength(2);
// Проведем серию изменений значений ячеек
tabSheet.setCellValue("1", 0, 0, true);
tabSheet.setCellValue("2", 0, 1, true);
tabSheet.setCellValue("3", 0, 2, true);
tabSheet.setCellValue("4", 0, 0, true);
tabSheet.setCellValue("5", 0, 1, true);
tabSheet.setCellValue("6", 0, 2, true);
// Отменим все изменения, доступные для отката
tabSheet.undoAll();
В результате выполнения примера был выделен диапазон ячеек и отображен
 элемент изменения размеров выделения. Затем была проведена серия изменений
 значений таблицы, после чего были отменены две последние операции:


![](../../Classes/TabSheet/TabSheet/TabSheet_SmoothScrolling.png)


Также была активирована плавная прокрутка, значение шага которого было
 выведено в консоль браузера:


Шаг плавной прокрутки: 45


См. также:


[TabSheetSettings](TabSheetSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

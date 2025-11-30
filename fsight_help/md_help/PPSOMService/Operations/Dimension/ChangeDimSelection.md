# ChangeDimSelection: Операция

ChangeDimSelection: Операция
-


# ChangeDimSelection


## Синтаксис


ChangeDimSelectionResult ChangeDimSelection(DmId
 tDim, DmSelectionArg tArg)


## Параметры


tDim. Моникёр открытого экземпляра
 справочника.


tArg. Параметры изменения отметки.


## Описание


Операция ChangeDimSelection
 изменяет отметку элементов справочника.


## Комментарии


Данная операция позволяет изменить отметку элементов и получить сводную
 информацию о сформировавшейся отметке элементов справочника. Для выполнения
 операции необходимо в параметре tDim
 указать моникёр открытого экземпляра справочника, а в параметре tArg указать параметры изменения
 отметки. Если в рамках одной операции ChangeDimSelection
 необходимо выполнить несколько изменений отметки, то параметры этих изменений
 могут быть рекурсивно указаны в поле next.


Результатом работы операции является сводная информация об отметке элементов,
 которая будет доступна в поле selectionInfo.
 Если необходимо получить информацию об отметке каждого элемента, то используйте
 операцию [GetDimElements](GetDimElements.htm) с соответствующими
 параметрами.


## Пример


Различные варианты использования операции приведены в следующих примерах:


		 Наименование примера


		 [Дополнение
		 одной отметки отмеченными элементами другой отметки](ChangeDimSelection_Sample/ChangeDimSelection_Sample6.htm)


		 [Изменение
		 отметки указанных элементов](ChangeDimSelection_Sample/ChangeDimSelection_Sample.htm)


		 [Изменение
		 отметки элементов заданного уровня](ChangeDimSelection_Sample/ChangeDimSelection_Sample4.htm)


		 [Отметка
		 группы элементов](ChangeDimSelection_Sample/ChangeDimSelection_Sample1.htm)


		 [Отметка
		 элементов в заданном календарном периоде](ChangeDimSelection_Sample/ChangeDimSelection_Sample5.htm)


		 [Применение
		 альтернативной иерархии в отметке](ChangeDimSelection_Sample/ChangeDimSelection_Sample2.htm)


		 [Поэтапное
		 изменение отметки в рамках одной операции](ChangeDimSelection_Sample/ChangeDimSelection_Sample3.htm)


См. также:


[Работа
 со справочниками](Dimension_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

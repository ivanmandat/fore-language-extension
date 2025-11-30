# IRibbonPanel.AddReferenceElement

IRibbonPanel.AddReferenceElement
-


# IRibbonPanel.AddReferenceElement


## Синтаксис


AddReferenceElement(Value: [IBaseRibbonElement](../IBaseRibbonElement/IBaseRibbonElement.htm));


## Параметры


Value. Элемент управления,
 ссылку на который добавляют.


## Описание


Метод AddReferenceElement добавляет
 элемент управления, который является ссылкой на элемент управления с другой
 панели, на панель ленты инструментов.


## Комментарии


Элемент управления зависит от состояния элемента управления, от которого
 сделана ссылка, например: при удалении кнопки все ссылочные кнопки
 будут удалены со всех панелей.


## Пример


Использование метода приведено в примере для [IRibbon.CustomDefaultMenuItem](../IRibbon/IRibbon.CustomDefaultMenuItem.htm).


См. также:


[IRibbonPanel](IRibbonPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

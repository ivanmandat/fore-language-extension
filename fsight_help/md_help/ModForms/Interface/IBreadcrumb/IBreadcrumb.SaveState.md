# IBreadcrumb.SaveState

IBreadcrumb.SaveState
-


# IBreadcrumb.SaveState


## Синтаксис


SaveState(Writer: [IXmlDomElement](ModXml.chm::/develop.htm));


## Параметры


Writer. XML элемент, в который осуществляется сохранение состояния элементов компонента.


## Описание


Метод SaveState осуществляет сохранение состояния элементов компонента.


## Комментарии


При работе метода сохраняются следующие параметры элементов: расположение элементов, [наименование](../IBreadcrumbItem/IBreadcrumbItem.Text.htm), [всплывающая подсказка](../IBreadcrumbItem/IBreadcrumbItem.Hint.htm), [признак постоянного элемента](../IBreadcrumbItem/IBreadcrumbItem.Permanent.htm), а также пользовательские данные, указанные в свойстве [Data](../IBreadcrumbItem/IBreadcrumbItem.Data.htm).


Примечание. Если в качестве параметра метода передается XML элемент, содержащий какие-либо данные, то текущее состояние элементов будет дописано в конец этих данных. В дальнейшем это может привести к некорректной загрузке состояния элементов. Рекомендуется сохранять данные в XML элемент, созданный непосредственно перед сохранением.


## Пример


Использование свойства приведено в примере для [IBreadcrumb.LoadState](IBreadcrumb.LoadState.htm).


См. также:


[IBreadcrumb](IBreadcrumb.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

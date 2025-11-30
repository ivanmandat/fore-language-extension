# EtlBox.OnSelectionChanged

EtlBox.OnSelectionChanged
-


# EtlBox.OnSelectionChanged


## Синтаксис


OnSelectionChanged(Sender: Object; Args: [IEtlShapeChangedEventArgs](../../Interface/IEtlShapeChangedEventArgs/IEtlShapeChangedEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnSelectionChanged наступает
 при смене выделенного объекта в рабочей области компонента.


## Комментарии


Событие генерируется как для объекта, который был выделен, так и для
 объекта, с которого выделение было снято. Если выделяется несколько объектов,
 то событие будет сгенерировано для каждого. Событие наступает, если свойству
 [IEtlBox.ActiveTool](../../Interface/IEtlBox/IEtlBox.ActiveTool.htm)
 установлено любое значение, кроме [WxTool.Hand](Andy.chm::/Enums/WxTool.htm)
 и [WxTool.ReadOnly](Andy.chm::/Enums/WxTool.htm).


См. также:


[EtlBox](EtlBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

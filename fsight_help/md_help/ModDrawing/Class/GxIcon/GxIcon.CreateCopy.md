# GxIcon.CreateCopy

GxIcon.CreateCopy
-


# GxIcon.CreateCopy


## Синтаксис


CreateCopy(Icon: [IGxIcon](../../Interface/IGxIcon/IGxIcon.htm);
 Size: [IGxSize](../../Interface/IGxSize/IGxSize.htm));


## Параметры


Icon. Пиктограмма, для которой
 необходимо создать копию.


Size. Размеры, в соответствии с которыми осуществляется
 масштабирование пиктограммы.


## Описание


Конструктор CreateCopy создает
 копию пиктограммы, масштабируя ее до указанных в параметре Size
 размеров.


## Пример


			Function GetIconCopy(SourceIcon: IGxIcon): IGxIcon;

Var

    IconSize, NewSize: IGxSize;

    DestinationIcon: IGxIcon;

Begin

    IconSize := SourceIcon.Size;

    NewSize := New GxSize.Create(IconSize.Width * 2, IconSize.Height * 2);

    DestinationIcon := New GxIcon.CreateCopy(SourceIcon, NewSize);

    Return DestinationIcon;

End Function GetIconCopy;


Данная функция возвращает копию пиктограммы, передаваемой в качестве
 входного параметра, увеличенную в два раза.


См. также:


[GxIcon](GxIcon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

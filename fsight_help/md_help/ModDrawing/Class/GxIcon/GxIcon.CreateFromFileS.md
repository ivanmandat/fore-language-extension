# GxIcon.CreateFromFileS

GxIcon.CreateFromFileS
-


# GxIcon.CreateFromFileS


## Синтаксис


CreateFromFileS(FileName: String; Size: [IGxSize](../../Interface/IGxSize/IGxSize.htm));


## Параметры


FileName.
 Путь
 и наименование файла пиктограммы.


Size. Размеры, в соответствии
 с которыми осуществляется масштабирование пиктограммы.


## Описание


Конструктор CreateFromFileS
 создает пиктограмму из указанного файла, масштабируя ее до указанных в
 параметре Size размеров.


## Пример


			Function GetScalingIconFromFile(FileName: String; SWidth: Integer; SHeight: Integer): IGxIcon;

Var

    ScalingSize: IGxSize;

    OutIcon: IGxIcon;

Begin

    If File.Exists(FileName) Then

        ScalingSize := New GxSize.Create(SWidth, SHeight);

        OutIcon := New GxIcon.CreateFromFileS(FileName, ScalingSize);

        Return OutIcon;

    Else

        Return Null;

    End If;

End Function GetScalingIconFromFile;


Данная функция вернет пиктограмму, полученную из файла и промасштабированную
 в соответствии с указанными размерами.


См. также:


[GxIcon](GxIcon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

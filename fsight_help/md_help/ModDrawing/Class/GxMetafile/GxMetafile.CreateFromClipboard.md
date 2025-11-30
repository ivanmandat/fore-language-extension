# GxMetafile.CreateFromClipboard

GxMetafile.CreateFromClipboard
-


# GxMetafile.CreateFromClipboard


## Синтаксис


CreateFromClipboard;


## Описание


Конструктор CreateFromClipboard создает метафайл Windows на основе содержимого буфера обмена.


## Пример


			Function GetMetafileFromClipboard: IGxMetafile;

Var

    Mtf: IGxMetafile;

Begin

    Mtf := New GxMetafile.CreateFromClipboard;

    Return Mtf;

End Function GetMetafileFromClipboard;


Данная функция вернет метафайл, полученный из буфера обмена.


См. также:


[GxMetafile](GxMetafile.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

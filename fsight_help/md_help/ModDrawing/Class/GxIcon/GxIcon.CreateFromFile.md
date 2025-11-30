# GxIcon.CreateFromFile

GxIcon.CreateFromFile
-


# GxIcon.CreateFromFile


## Синтаксис


CreateFromFile(FileName: String);


## Параметры


FileName. Путь и наименование
 файла пиктограммы.


## Описание


Конструктор CreateFromFile создает
 пиктограмму из указанного файла.


## Пример


			Function GetIconFromFile(FileName: String): IGxIcon;

Var

    OutIcon: IGxIcon;

Begin

    If File.Exists(FileName) Then

        OutIcon := New GxIcon.CreateFromFile(FileName);

        Return OutIcon;

    Else

        Return Null;

    End If;

End Function GetIconFromFile;


Данная функция вернет пиктограмму, полученную из файла, путь к которому
 указан в качестве входного параметра.


См. также:


[GxIcon](GxIcon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

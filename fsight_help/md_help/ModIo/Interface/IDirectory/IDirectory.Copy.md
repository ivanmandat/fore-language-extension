# IDirectory.Copy

IDirectory.Copy
-


# IDirectory.Copy


## Синтаксис


Copy(Source: String; Destination: String);


## Параметры


Source - каталог, который необходимо скопировать.


Destination - каталог, в который будет осуществляться копирование.


## Описание


Метод Copy осуществляет копирование каталога Source со всем содержимым в каталог Destination.


## Пример


			Sub UserProc(Source: String; Destination: String);

Begin

    If Directory.Exists(Source) And Directory.Exists(Destination) Then

        Directory.Copy(Source, Destination);

    End If;

End Sub UserProc;


При выполнении примера если в файловой системе существуют каталоги, передаваемые посредством параметров «Source» и «Destination», то каталог «Source» будет скопирован в каталог «Destination» со всем содержимым.


См.также:


[IDirectory](IDirectory.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

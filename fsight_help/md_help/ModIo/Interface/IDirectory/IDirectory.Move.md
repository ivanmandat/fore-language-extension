# IDirectory.Move

IDirectory.Move
-


# IDirectory.Move


## Синтаксис


Move(Source: String; Destination: String);


## Параметры


Source - каталог, который необходимо переместить.


Destination - каталог, в который будет осуществляться перемещение.


## Описание


Метод Move осуществляет перемещение каталога Source со всем содержимым, в каталог Destination.


## Пример


			Sub UserProcMove(Source: String; Destination: String);

Begin

    If Directory.Exists(Source) And Directory.Exists(Destination) Then

        Directory.Move(Source, Destination);

    End If;

End Sub UserProcMove;


При выполнении примера если в файловой системе существуют каталоги, передаваемые посредством параметров «Source» и «Destination», то каталог «Source» будет перемещен в каталог «Destination» со всем содержимым.


См.также:


[IDirectory](IDirectory.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IWinApplicationClass.Binary

IWinApplicationClass.Binary
-


# IWinApplicationClass.Binary


## Синтаксис


Binary: String;


## Описание


Свойство Binary возвращает путь
 и имя исполняемого файла, с помощью которого был запущен текущий экземпляр
 платформы.


## Пример


			Sub UserProc;

Begin

    Debug.WriteLine(WinApplication.Binary);

End Sub UserProc;


При выполнении примера в консоль среды разработки будут выведены путь
 и наименование файла, с помощью которого был запущен текущий экземпляр
 платформы.


См. также:


[IWinApplicationClass](IWinApplicationClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

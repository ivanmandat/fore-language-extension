# IInMemManager.UseInMem

IInMemManager.UseInMem
-


# IInMemManager.UseInMem


## Синтаксис


UseInMem: Boolean;


## Описание


Свойство UseInMem возвращает
 признак использования кеша In-Memory при работе с данными кубов репозитория.


## Комментарии


По умолчанию кеш In-Memory используется в репозитории. Управление кешем
 осуществляется через [реестр](Setup.chm::/UiWebSetup/03_Setup_Web/BI_Server_Registry_Key.htm#inmem)/[файл
 settings.xml](Setup.chm::/UiWebSetup/03_Setup_Web/BI_Server_Settings_XML.htm#inmem).


## Пример


Добавьте ссылку на системную сборку Cubes.


	Sub UserProc;

	Var

	    InMem: IInMemManager;

	Begin

	    InMem := New InMemManager.Create;

	    Debug.WriteLine("Используется кеш In-Memory: " + InMem.UseInMem.ToString);

	    If InMem.UseInMem Then

	        Debug.WriteLine("Объем используемой отображаемой памяти: " + InMem.SharedMemory.ToString + " байт.");

	        Debug.WriteLine("Объем места на диске: " + InMem.StoredMemory.ToString + " байт.");

	    End If;

	End Sub UserProc;


При выполнения примера в консоль среды разработки будет выведен признак
 использования кеша In-Memory и размеры занимаемой отображаемой памяти
 и места на диске, если кеш используется.


См. также:


[IInMemManager](IInMemManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

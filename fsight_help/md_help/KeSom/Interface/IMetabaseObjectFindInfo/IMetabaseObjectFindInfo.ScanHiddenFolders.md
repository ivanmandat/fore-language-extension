# IMetabaseObjectFindInfo.ScanHiddenFolders

IMetabaseObjectFindInfo.ScanHiddenFolders
-


# IMetabaseObjectFindInfo.ScanHiddenFolders


## Синтаксис


		ScanHiddenFolders: Boolean;


## Описание


Свойство ScanHiddenFolders определяет,
 будет ли производиться поиск в скрытых папках.


## Комментарии


Если у пользователя нет прав на чтение какой-либо папки, то данная папка
 (и все ее содержимое) скрывается из репозитория. По умолчанию данному
 свойству установлено значение False,
 при этом поиск в скрытых папках не производится. Если в скрытых папках
 имеются объекты, на которые у текущего пользователя есть право на чтение,
 то чтобы их найти необходимо данному свойству установить значение True.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MDescs: IMetabaseObjectDescriptors;

		    MDesc: IMetabaseObjectDescriptor;

		    FInfo: IMetabaseObjectFindInfo;

		Begin

		    MB := MetabaseClass.Active;

		    FInfo := MB.CreateFindInfo;

		    FInfo.ClassId := MetabaseObjectClass.KE_CLASS_STDCUBE;

		    FInfo.WholeWordsOnly := False;

		    FInfo.ScanHiddenFolders := True;

		    MDescs := MB.Find(FInfo);

		    For Each MDesc In MDescs Do

		        Debug.WriteLine("Идентификатор: " + MDesc.Id + "; Наименование: " + MDesc.Name);

		    End For;

		End Sub UserProc;


После выполнения примера будет осуществлен поиск всех стандартных кубов,
 имеющихся в репозитории. Поиск будет производиться во всех папках репозитория,
 включая те, на которые у пользователя могут отсутствовать права на чтение.
 Наименования и идентификаторы найденных объектов будут выведены в консоль
 среды разработки.


См. также:


[IMetabaseObjectFindInfo](IMetabaseObjectFindInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

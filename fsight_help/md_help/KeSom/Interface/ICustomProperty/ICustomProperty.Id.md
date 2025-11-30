# ICustomProperty.Id

ICustomProperty.Id
-


# ICustomProperty.Id


## Синтаксис


Id: String;


## Описание


Свойство Id определяет идентификатор
 пользовательского свойства.


## Пример


Для выполнения примера предполагается наличие файла обновления с наименованием
 «Update.pefx».


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    Update: IMetabaseUpdate;

    CP: ICustomProperties;

Begin

    // Получим текущий репозиторий

    MB := MetabaseClass.Active;

    // Создадим объект обновления

    Update := Mb.CreateUpdate;

    // Загрузим обновление из файла

    Update.LoadFromFileNF("C:\Update.pefx");

    // Получим метаданные обновления

    CP := Update.CustomProperties;

    // Выведем в консоль информацию об авторе обновления

    Debug.WriteLine("Идентификатор пользовательского свойства: "+CP.Item(0).Id);

    Debug.WriteLine("Наименование пользовательского свойства: "+CP.Item(0).Name);

    Debug.WriteLine("Значение пользовательского свойства: "+CP.Item(0).Value);

End Sub UserProc;


В результате выполнения примера в консоль будет выведена информация
 об авторе, создавшем обновление.


См. также:


[ICustomProperty](ICustomProperty.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

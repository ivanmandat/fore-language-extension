# IModule.Standalone

IModule.Standalone
-


# IModule.Standalone


## Синтаксис


Standalone: Boolean;


## Описание


Свойство Standalone возвращает признак нахождения объекта в составе сборки.


## Комментарии


Если модуль/форма включены в состав какой-либо сборки, то свойство вернет значение False, и в свойстве [ParentAssembly](IModule.ParentAssembly.htm) можно получить описание родительской сборки.


Если модуль/форма не включены в состав сборки, то они реализуют временную сборку. При этом данное свойство вернет значение True, а параметры временной сборки будут доступны в свойстве [Assembly](IModule.Assembly.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории модуля с идентификатором «TestModule».


			Sub Main;

Var

    MB: IMetabase;

    Module: IModule;

Begin

    MB := MetabaseClass.Active;

    Module := MB.ItemById("TestModule").Bind As IModule;
    If Not Module.Standalone Then

        Debug.WriteLine("Родительская сборка: " + Module.ParentAssembly.Id);

        Debug.WriteLine("Ссылки родительской сборки: " + (Module.ParentAssembly.Bind As IAssembly).References);

    Else

        Debug.WriteLine("Модуль не включен ни в одну сборку репозитория");

        Debug.WriteLine("Ссылки модуля: " + Module.Assembly.References);

    End If;

End Sub Main;


После выполнения примера в консоль среды разработки будет выведена информация о модуле: наличие родительской сборки и подключенные сборки.


См. также:


[IModule](IModule.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

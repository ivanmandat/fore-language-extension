# EditCustomClass

EditCustomClass
-


# Команда EditCustomClass


## Назначение


Вызов диалога редактирования существующего [пользовательского
 класса](UiDevEnv.chm::/04_NavigatorSetting/Classes_Object/ObjectsClasses.htm#create).


## Особенности применения


Если редактирование существующего пользовательского класса выполнено
 успешно, то метод [Execute](../IUiCommandTarget.Execute.htm)
 вернет значение True, иначе False.


## Пример


Для выполнения примера предполагается наличие в [пользовательских
 метаданных](UiDevEnv.chm::/04_NavigatorSetting/Classes_Object/UiNav_Classes_Object.htm) репозитория [пользовательского
 класса](UiDevEnv.chm::/04_NavigatorSetting/Classes_Object/UiNav_Classes_Object.htm#create) с идентификатором CUSTOMCLASS.


Добавьте ссылки на системные сборки: Metabase, Ui.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	    CustomExtender: IMetabaseCustomExtender;

	    Type: MetabaseSpecialObject;

	    Result: Boolean;

	    Data: Array Of Variant;

	Begin

	    Mb := MetabaseClass.Active;

	    Type := MetabaseSpecialObject.CustomExtender;

	    Target := WinApplication.Instance.GetPluginTarget("Std");

	    Context := Target.CreateExecutionContext;

	    Data := New Variant[2];

	    CustomExtender := Mb.SpecialObject(Type).Bind As IMetabaseCustomExtender;

	    Data[0] := MetabaseClass.Active;

	    Data[1] := CustomExtender.Classes.FindById("CUSTOMCLASS").Key;

	    Context.Data := Data;

	    Result := Target.Execute("EditCustomClass", Context);

	    Debug.WriteLine(Result);

	End Sub UserProc;


После выполнения примера будет открыт диалог редактирования [пользовательского
 класса](UiDevEnv.chm::/04_NavigatorSetting/Classes_Object/ObjectsClasses.htm#create) с идентификатором CUSTOMCLASS. Измените параметры
 класса и нажмите кнопку «ОК».
 В консоль будет выведен результат редактирования класса.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IMetabaseObjectDescriptor.EditTemporary

IMetabaseObjectDescriptor.EditTemporary
-


# IMetabaseObjectDescriptor.EditTemporary


## Синтаксис


		EditTemporary: [IMetabaseObject](../IMetabaseObject/IMetabaseObject.htm);


## Описание


Метод EditTemporary открывает
 объект для временного изменения свойств.


## Комментарии


Объект в данном режиме нельзя сохранять. При попытке сохранения генерируется
 ошибка «Объект не находится в состоянии редактирования».


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с идентификатором «Button1», компонента ModelBox
 и компонента UiModel с идентификатором
 «UiModel1», являющегося источником данных для ModelBox.
 В репозитории имеется контейнер моделирования с идентификатором «CONT_MODEL»
 и созданная в нем модель с идентификатором «MODEL».


Добавьте ссылки на системные сборки: Metabase, Ms.


		Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

		Var

		    MB: IMetabase;

		    ContKey: Integer;

		    Model: IMsModel;

		Begin

		    MB := MetabaseClass.Active;

		    ContKey := MB.ItemById("CONT_MODEL").Key;

		    Model := MB.ItemByIdNamespace("MODEL", ContKey).EditTemporary As IMsModel;

		    UiModel1.Active := False;

		    UiModel1.Model := Model;

		    UiModel1.Active := True;

		End Sub Button1OnClick;


После выполнения примера в компоненте ModelBox
 будет открыта модель «MODEL». Параметры модели можно редактировать, но
 нельзя сохранить.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

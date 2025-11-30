# IUserProfile.PrivateFolder

IUserProfile.PrivateFolder
-


# IUserProfile.PrivateFolder


## Синтаксис


PrivateFolder: [IMetabaseObjectDescriptor](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство PrivateFolder определяет
 [личную
 папку](Admin.chm::/03_Admin/Users/Admin_UserFolder.htm) пользователя.


## Пример


Выполнение примера предполагает наличие формы с кнопкой. Необходимо
 подключить системную сборку Metabase. Пример является обработчиком события
 для кнопки.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Mb: IMetabase;

    User: IMetabaseUser;

    Prof: IUserProfile;

Begin

    Mb := MetabaseClass.Active;

    User := Mb.LogonSession.User;

    Prof := User.Profile.Edit;

    Button1.Text := Prof.PrivateFolder.Id;

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку в текст кнопки будет
 передан идентификатор личной папки текущего пользователя.


См. также:


[IUserProfile](IUserProfile.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

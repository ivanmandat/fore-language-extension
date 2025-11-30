# IMetabaseUser.IsTemporary

IMetabaseUser.IsTemporary
-


# IMetabaseUser.IsTemporary


## Синтаксис


IsTemporary : Boolean;


## Описание


Свойство IsTemporary возвращает
 признак соответствия пользователя временной учетной записи.


## Пример


Для выполнения примера предполагается наличие на форме компонента Button с идентификатором Button1.
 Пример является обработчиком события OnClick
 для компонента Button1.


Для выполнения примера добавьте ссылку на системную сборку Metabase.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var MB:IMetabase;

	    User:IMetabaseUser;

	    Users:IMetabaseUsers;

	Begin

	    // Получим данные текущего репозитория

	    MB:=MetabaseClass.Active;

	    // Получим информацию о пользователе
	 репозитория

	    Users:=MB.Security.Users;

	    User:=Users.Item(0);

	    // Проверим, является ли пользователь временным

	   If User.IsTemporary=True Then

	    User.TemporaryAge:=10;

	   Else

	        Debug.Write("Пользователь не является временным");

	    End If;

	End Sub Button1OnClick;


В результате выполнения примера после нажатия кнопки будет проведена
 проверка, является ли пользователь с идентификатором 0 временным. Если
 пользователь является временным, то ему будет установлен временный период
 в 10 дней при помощи свойства [IMetabaseUser.TemporaryAge](IMetabaseUser.TemporaryAge.htm).
 Если пользователь не является временным, то в консоли будет выведено сообщение
 «Пользователь не является временным».


См. также:


[IMetabaseUser](IMetabaseUser.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

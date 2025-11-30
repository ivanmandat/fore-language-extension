# IApplicationVersion.Build

IApplicationVersion.Build
-


# IApplicationVersion.Build


## Синтаксис


Build: Integer;


## Описание


Свойство Build возвращает номер
 сборки платформы.


## Комментарии


Если номер версии «10.9.7432»,
 то свойство Build будет возвращать
 значение «7432».


## Пример


Для выполнения примера добавьте ссылку на системную сборку Host.


			Sub UserProc;

Var

    Ver: IApplicationVersion;

Begin

    Ver := New ApplicationVersion.Create;

    // Выведем в консоль информацию о текущей сборке платформы

    Debug.WriteLine("Описание версии - " + Ver.VersionDescription);

    Debug.WriteLine("Номер
 сборки - " + Ver.Build.ToString);

    Debug.WriteLine("Отладочная
 версия - " + Ver.Debug.ToString);

    Debug.WriteLine("Полное
 описание версии - " + Ver.Description);

    Debug.WriteLine("Выпущенная
 версия - " + Ver.IsRelease.ToString);

    Debug.WriteLine("Номер
 основной версии сборки - " + Ver.Major.ToString);

    Debug.WriteLine("Максимальный
 номер сборки текущего релиза - " + Ver.MaxReleaseBuild.ToString);

    Debug.WriteLine("Номер
 промежуточной версии сборки - " + Ver.Minor.ToString);

    Debug.WriteLine("Минимальный
 номер сборки текущего релиза - " + Ver.MinReleaseBuild.ToString);

    Debug.WriteLine("Нетестированная
 сборка - " + Ver.PrivateBuild.ToString);

    Debug.WriteLine("Номер
 обновления - " + Ver.QFE.ToString);

    Debug.WriteLine("Краткое
 описание версии - " + Ver.ShortDescription);

End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведена вся
 информация о текущей сборке платформы, например:


Описание версии - Master


Номер сборки - 55863


Отладочная версия - False


Полное описание версии - Релиз
 10.9.55863.863
 Master x64


Выпущенная версия - True


Номер основной версии
 сборки - 9


Максимальный номер сборки
 текущего релиза - 55999


Номер промежуточной
 версии сборки - 2


Минимальный номер сборки
 текущего релиза - 55000


Нетестированная сборка - False


Номер обновления - 863


Краткое описание версии - 10.9.55863.863
 Master x64


См. также:


[IApplicationVersion](IApplicationVersion.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# Работа в Python

Работа в Python
-


# Работа в Python


Язык Python является универсальным языком, поддерживающим выполнение
 кода на других языках, таких как Java, C и C#. Для взаимодействия с Python
 в «Форсайт. Аналитическая платформа»
 был создан специальный набор внешних Interop-сборок. Данные сборки позволяют
 работать с ядром «Форсайт. Аналитическая платформа».
 При работе в ОС Windows сборки будут доступны в папке S\Interops\python\
 после установки инсталлятора [FP10PythonInterops.exe](Setup.chm::/02_AK_Install/DistributionKit.htm#32_and_64),
 где S - путь, по которому установлен продукт «Форсайт. Аналитическая платформа».
 При работе в ОС Linux набор Interop-сборок входит в [пакеты](Setup.chm::/02_AK_Install/DistributionKit.htm#linux),
 предназначенные для установки BI-сервера.


Примечание.
 При работе в ОС Windows используемая версия Python должна совпадать с
 версией, которая использовалась при сборке внешних Interop-сборок. В текущей
 реализации - это версия 3.12. Сборки для Linux не зависят от используемой
 при сборке версии Python. При необходимости получения сборок других версий
 обращайтесь в техническую поддержку по адресу [support@fsight.ru](mailto:support@fsight.ru)
 или через [сервисы
 технической поддержки](https://www.fsight.ru/support/), которые доступны после регистрации на сайте.


## Подключение сборок


При работе в Python версии 3.8 и выше в первую очередь необходимо путь
 до платформы добавить в список доверенных путей. В разных операционных
 системах осуществляется различный подход:


	Linux Windows


import sys

sys.path.append('/opt/foresight/fp10.x-biserver/bin/interops/pyhton')


import os

os.add_dll_directory("C:\Program Files\Foresight\Analytics Platform 10.x")


В коде пропишите строку импорта типов из внешней сборки в одном из следующих
 форматов:


from foresight.<Имя сборки> import * #Импорт всех классов/интерфейсов.

from foresight.<Имя сборки> import <имя класса> #Импорт конкретного класса/интерфейс.

import foresight.<Имя сборки> as <переменная> #Импорт класса под определенным именем.

## Преобразование кода


При создании внешних Interop-сборок для использования в Python происходит
 специальное преобразование системных классов, интерфейсов, перечислений
 и других типов. При создании кода на Python с использованием ресурсов
 «Форсайт. Аналитическая платформа»
 необходимо учитывать следующие изменения:


	- Свойствам сопоставлены методы в следующих форматах: get_<имя
	 свойства>([<параметры>]) и put_<имя
	 свойства>(<значение>). Get возвращает значение свойства,
	 а Put устанавливает указанное значение.


	- К именам классов добавлена буква C, например: классу MetabaseManagerFactory
	 в Fore соответствует CMetabaseManagerFactory
	 в Python.


	- Для создания объекта нужного класса используется конструкция
	 <Имя класса>.Create()
	 или <Имя класса>.Create<имя
	 интерфейса>() без ключевого слова new.


	- Для приведения типов необходимо передавать имеющийся объект
	 как параметр, например:


import foresight.metabase as modmetabase
...
creds = pack.CreateCredentials(amPassword)
pswdCreds = modmetabase.IPasswordCredentials(creds)

## Примеры


Ниже приведены примеры реализации различных процедур/функций на языке
 Fore и их аналоги на языке Python. Для простоты восприятия наименования
 переменных и комментарии в функциях оставлены одинаковыми.


Пример подключения к репозиторию
 в коде на Python:


	Fore Python


			Function ConnectMB: IMetabase;

			Var

			    mb: IMetabase;

			    mbMan: IMetabaseManager;

			    mbDefs: IMetabaseDefinitions;

			    mbDef: IMetabaseDefinition;

			    pack: ISecurityPackage;

			    creds: ICredentials;

			    pswdCreds: IPasswordCredentials;

			Begin

			    // Менеджер репозиториев

			    mbMan := MetabaseManagerFactory.Active;

			    // Все описания репозиториев

			    mbDefs := mbMan.Definitions;

			    // Получение описания репозитория, к которому осуществляется подключение

			    mbDef := mbDefs.FindById("'Repository'");

			    // Модуля безопасности

			    pack := mbMan.Packs.FindById(mbDef.SecurityPackage).Package;

			    // Создание и настройка учётных данных для подключения

			    creds := pack.CreateCredentials(AuthenticationMode.Password);

			    pswdCreds := creds As IPasswordCredentials;

			    pswdCreds.UserName := "user";

			    pswdCreds.Password := "password";

			    // Подключение к репозиторию и возврат контекста для работы с содержимым репозитория

			    mb := mbDef.OpenDefault(pswdCreds);

			    Return mb

			End Function ConnectMB;


import os
from foresight.metabase import * #Импорт содержимого всей сборки Metabase

def ConnectMB():

    os.add_dll_directory("C:\Program Files\Foresight\Analytics Platform 10.x")

    # Менеджер репозиториев

    mbFactory = CMetabaseManagerFactory.Create()

    mbMan = mbFactory.Active

    # Все описания репозиториев

    mbDefs = mbMan.Definitions

    mbDefs.ReadFromRegistry()

    # Получение описания репозитория, к которому осуществляется подключение

    mbDef = mbDefs.FindById('Repository')

    # Модуля безопасности

    pack = mbMan.Packs.FindById(mbDef.get_SecurityPackage()).Package

    # Создание и настройка учётных данных для подключения

    creds = pack.CreateCredentials(amPassword)

    pswdCreds = IPasswordCredentials(creds)

    pswdCreds.UserName = 'user'

    pswdCreds.Password = 'password'

    # Подключение к репозиторию и возврат контекста для работы с содержимым репозитория

    mb = mbDef.OpenDefault(pswdCreds)

    return mb


if __name__ == '__main__':

    mb = ConnectMB()

    print(mb.Name)


Получение описания объекта. В качестве первого параметра передаётся
 контекст репозитория, который возвращает функция ConnectMB:


	Fore Python


			Function GetMbObject(mb: IMetabase; id: String): IMetabaseObjectDescriptor;

			Var

			    mdesc: IMetabaseObjectDescriptor;

			Begin

			    // Получение описания объекта путём получения значения свойства IMetabase.ItemById

			    mdesc := mb.ItemById(id);

			    Return mdesc;

			End Function GetMbObject;


from foresight.metabase import *
def GetMbObject(mb, id):

    # Получение описания объекта путём получения значения свойства IMetabase.ItemById

    mdesc = mb.get_ItemById(id)

    return mdesc


Открытие регламентного отчёта, изменение значения в ячейке и сохранение
 изменений. В качестве значения первого параметра передаётся описание регламентного
 отчёта, которое можно получить, используя предыдущую функцию GetMbObject:


	Fore Python


			Sub EditPrxReport(mdesc: IMetabaseObjectDescriptor; newValue: Variant);

			Var

			    report: IPrxReport;

			    ptable: IPrxTable;

			    sheet: ITabSheet;

			Begin

			    // Открытие отчёта на редактирование и приведение результата к типу IPrxReport

			    report := mdesc.Edit As IPrxReport;

			    // Получение таблицы активного листа

			    ptable := report.ActiveSheet As IPrxTable;

			    sheet := ptable.TabSheet;

			    // Изменение значения в ячейке

			    sheet.Cell(0, 0).Value := newValue;

			    // Сохранение изменений

			    report.MetabaseObject.Save;

			    // Проверка установленного значения для ячейки

			    Debug.WriteLine(sheet.Cell(0, 0).Value);

			End Sub EditPrxReport;


from foresight.metabase import *
from foresight.report import *
from foresight.tab import *
def EditPrxReport(mdesc, newValue):

    # Открытие отчёта на редактирование и приведение результата к типу IPrxReport

    report = IPrxReport(mdesc.Edit())

    # Получение таблицы активного листа

    ptable = IPrxTable(report.get_ActiveSheet())

    sheet = ITabSheet(ptable.get_TabSheet())

    # Изменение значения в ячейке

    sheet.get_Cell(0, 0).put_Value(newValue)

    # Сохранение изменений

    report.get_MetabaseObject().Save()

    # Проверка установленного значения для ячейки

    print(sheet.get_Cell(0, 0).get_Value())


Открытие куба, формирование отметки, расчёт и возврат результирующей
 матрицы куба:


	Fore Python


			Function GetCubeMatrix(mdesc: IMetabaseObjectDescriptor): IMatrix;

			Var

			    cube: ICubeInstance;

			    destInst: ICubeInstanceDestination;

			    dimSS: IDimSelectionSet;

			    dimS: IDimSelection;

			    matr: IMatrix;

			    i, c: Integer;

			Begin

			    // Открытие куба

			    cube := mdesc.Open(Null) As ICubeInstance;

			    // Получение экземпляра варианта отображения куба

			    destInst := cube.Destinations.DefaultDestination;

			    // Создание отметки

			    dimSS := destInst.CreateDimSelectionSet;

			    // Отметка всех элементов во всех измерениях

			    c := dimSS.Count;

			    For i := 0 To c - 1 Do

			        dimS := dimSS.Item(i);

			        dimS.SelectAll;

			    End For;

			    // Расчёт результирующей матрицы куба

			    matr := destInst.Execute(DimSS);

			    // Возврат полученной матрицы

			    Return matr;

			End Function GetCubeMatrix;


import ctypes

from foresight.cubes import *

from foresight.dimensions import *

from foresight.matrix import *

from foresight.metabase import *

def GetCubeMatrix(mdesc):

    # Открытие куба

    cube = ICubeInstance(mdesc.Open(None ))

    # Получение экземпляра варианта отображения куба

    destInst = ICubeInstanceDestination(cube.get_Destinations().get_DefaultDestination())

    # Создание отметки

    dimSS = IDimSelectionSet(destInst.CreateDimSelectionSet())

    # Отметка всех элементов во всех измерениях

    c = dimSS.get_Count();

    for i in range(c):

        dimS = dimSS.get_Item(i)

        dimS.SelectAll()

    # Расчёт результирующей матрицы куба

    matr = IMatrix(destInst.Execute(dimSS, ctypes.c_uint(-1).value))

    # Возврат полученной матрицы

    return matr;


См. также:


[Использование
 ресурсов продукта в сторонних приложениях](../KnowledgeBase_KB000029.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

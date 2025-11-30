# GetBuiltinAssemblies: Операция

GetBuiltinAssemblies: Операция
-


**


# GetBuiltinAssemblies


## Синтаксис


GetBuiltinAssembliesResult GetBuiltinAssemblies()


## Описание


Операция GetBuiltinAssemblies
 позволяет получить список системных сборок, доступных для использования
 в среде разработки.


## Комментарии


Результатом операции будет список строковых наименований системных сборок
 и их описание. В дальнейшем список может использоваться для добавления
 ссылок на какую-либо сборку при настройке других [модулей](SetModule.htm)/[сборок](SetAssembly.htm).


## Пример


Ниже приведён пример использования операции GetBuiltinAssemblies
 для получения информации о системных сборках среды разработки.


	 SOAP  JSON  C#


### SOAP-запрос:


		[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">


			[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">


			  <GetBuiltinAssemblies xmlns="**http://www.fsight.ru/PP.SOM.Som**" />


			  </s:Body>


		  </s:Envelope>


### SOAP-ответ:


		[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">


			[![](../../minus.gif)](../../#)<soapenv:Body>


				[![](../../minus.gif)](../../#)<GetBuiltinAssembliesResult
				 xmlns="**http://www.fsight.ru/PP.SOM.Som**"
				 xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**"
				 xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">


					[![](../../minus.gif)](../../#)<builtinAssemblies xmlns="** **">


						[![](../../minus.gif)](../../#)<it>


							  <name>Andy</name>


							  <description>Графические примитивы рабочих пространств</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>Forms</name>


							  <description>Стандартные и дополнительные компоненты
							 (дизайнер форм)</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>Metabase</name>


							  <description>Объекты метабазы, безопасность</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>Db</name>


							  <description>Реляционные объекты</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>Dimensions</name>


							  <description>Справочники</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>Matrix</name>


							  <description>Матрицы</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>Cubes</name>


							  <description>Кубы, база данных временных рядов,
							 многомерный расчет на сервере БД</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>Pivot</name>


							  <description>Ядро аналитических запросов (OLAP):
							 фильтрация, подсветка, управление измерениями
							 экспресс-отчета и т.д.</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>Workspace</name>


							  <description>Объект рабочего пространства</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>Chart</name>


							  <description>Диаграммы, 3D-сцены</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>ExtCtrls</name>


							  <description>Компоненты доступа к данным (дизайнер
							 форм)</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>Io</name>


							  <description>Операции ввода-вывода</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>Etl</name>


							  <description>Задачи ETL</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>MathFin</name>


							  <description>Набор математических и финансовых
							 функций</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>Drawing</name>


							  <description>Таблица стилей оформления, базовые
							 примитивы для рисования (перо, кисть, изображения,
							 цвета и т.д.)</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>Export</name>


							  <description>Базовые интерфейсы экспорта</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>Express</name>


							  <description>Экспресс-отчеты</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>Registry</name>


							  <description>Реестр Windows</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>Collections</name>


							  <description>Коллекции: списки, очереди, стэки</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>Map</name>


							  <description>Карты</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>Topobase</name>


							  <description>Топоосновы: загрузка из файла,
							 выгрузка в файл</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>Report</name>


							  <description>Регламентные отчеты</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>Tab</name>


							  <description>Компонент TabSheet</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>Dt</name>


							  <description>Источники-приёмники данных для
							 задач ETL</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>Dal</name>


							  <description>Драйвера СУБД, объекты СУБД (таблицы,
							 представления, запросы)</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>Xml</name>


							  <description>Работа с XML-файлами: создание,
							 загрузка/выгрузка в файл, разбор и т.п.</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>Rds</name>


							  <description>Репозиторий НСИ</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>Orm</name>


							  <description>Объектная реляционная модель</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>AdoMd</name>


							  <description>Каталог ADOMD и его объекты</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>Ms</name>


							  <description>Контейнер моделирования</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>Speedometer</name>


							  <description>Спидометры</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>Ui</name>


							  <description>Работа с "%s" как с приложением
							 Windows</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>Net</name>


							  <description>Работа с сетью: HTTP-запросы, e-mail</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>Fore</name>


							  <description>Объект "Документ", диалог
							 задания параметров объектов, Контейнер задач</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>Laner</name>


							  <description>Ядро аналитических запросов (OLAP)
							 для работы в рядном режиме</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>Stat</name>


							  <description>Статистические методы: линейная
							 регрессия, универсальный тренд и т.д.</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>Cp</name>


							  <description>Задачи оптимального управления</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>Adhoc</name>


							  <description>Ядро конструктора аналитических
							 панелей</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>Transform</name>


							  <description>Ядро преобразований моделирования</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>NN</name>


							  <description>Нейронные сети</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>BISearch</name>


							  <description>BI-поиск</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>Visualizators</name>


							  <description>Визуализаторы</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>Python</name>


							  <description>Вызов функций на языке Python</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>ABAC</name>


							  <description>Ядро ABAC</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>BPM</name>


							  <description>Объекты бизнес-процессов</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>Host</name>


							  <description>Работа с внешними приложениями,
							 лицензирование</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>Java</name>


							  <description>Вызов функций на языке Java</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>ProjectPlanning</name>


							  <description>Диаграммы Ганта</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>DecisionTree</name>


							  <description>Дерево решений</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>Algo</name>


							  <description>Алгоритмы расчёта показателей</description>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <name>DEF</name>


							  <description>Формы ввода/вывода</description>


						  </it>


					  </builtinAssemblies>


				  </GetBuiltinAssembliesResult>


			  </soapenv:Body>


		  </soapenv:Envelope>


### JSON-запрос:


{
 "GetBuiltinAssemblies" : ""
}

### JSON-ответ:


{
 "GetBuiltinAssembliesResult" :
  {
   "builtinAssemblies" :
    {
     "it" :
      [
        {
         "name" : "Andy",
         "description" : "Графические примитивы рабочих пространств"
        },
        {
         "name" : "Forms",
         "description" : "Стандартные и дополнительные компоненты (дизайнер форм)"
        },
        {
         "name" : "Metabase",
         "description" : "Объекты метабазы, безопасность"
        },
        {
         "name" : "Db",
         "description" : "Реляционные объекты"
        },
        {
         "name" : "Dimensions",
         "description" : "Справочники"
        },
        {
         "name" : "Matrix",
         "description" : "Матрицы"
        },
        {
         "name" : "Cubes",
         "description" : "Кубы, база данных временных рядов, многомерный расчет на сервере БД"
        },
        {
         "name" : "Pivot",
         "description" : "Ядро аналитических запросов (OLAP): фильтрация, подсветка, управление измерениями экспресс-отчета и т.д."
        },
        {
         "name" : "Workspace",
         "description" : "Объект рабочего пространства"
        },
        {
         "name" : "Chart",
         "description" : "Диаграммы, 3D-сцены"
        },
        {
         "name" : "ExtCtrls",
         "description" : "Компоненты доступа к данным (дизайнер форм)"
        },
        {
         "name" : "Io",
         "description" : "Операции ввода-вывода"
        },
        {
         "name" : "Etl",
         "description" : "Задачи ETL"
        },
        {
         "name" : "MathFin",
         "description" : "Набор математических и финансовых функций"
        },
        {
         "name" : "Drawing",
         "description" : "Таблица стилей оформления, базовые примитивы для рисования (перо, кисть, изображения, цвета и т.д.)"
        },
        {
         "name" : "Export",
         "description" : "Базовые интерфейсы экспорта"
        },
        {
         "name" : "Express",
         "description" : "Экспресс-отчеты"
        },
        {
         "name" : "Registry",
         "description" : "Реестр Windows"
        },
        {
         "name" : "Collections",
         "description" : "Коллекции: списки, очереди, стэки"
        },
        {
         "name" : "Map",
         "description" : "Карты"
        },
        {
         "name" : "Topobase",
         "description" : "Топоосновы: загрузка из файла, выгрузка в файл"
        },
        {
         "name" : "Report",
         "description" : "Регламентные отчеты"
        },
        {
         "name" : "Tab",
         "description" : "Компонент TabSheet"
        },
        {
         "name" : "Dt",
         "description" : "Источники-приёмники данных для задач ETL"
        },
        {
         "name" : "Dal",
         "description" : "Драйвера СУБД, объекты СУБД (таблицы, представления, запросы)"
        },
        {
         "name" : "Xml",
         "description" : "Работа с XML-файлами: создание, загрузка\/выгрузка в файл, разбор и т.п."
        },
        {
         "name" : "Rds",
         "description" : "Репозиторий НСИ"
        },
        {
         "name" : "Orm",
         "description" : "Объектная реляционная модель"
        },
        {
         "name" : "AdoMd",
         "description" : "Каталог ADOMD и его объекты"
        },
        {
         "name" : "Ms",
         "description" : "Контейнер моделирования"
        },
        {
         "name" : "Speedometer",
         "description" : "Спидометры"
        },
        {
         "name" : "Ui",
         "description" : "Работа с "%s" как с приложением Windows"
        },
        {
         "name" : "Net",
         "description" : "Работа с сетью: HTTP-запросы, e-mail"
        },
        {
         "name" : "Fore",
         "description" : "Объект "Документ", диалог задания параметров объектов, Контейнер задач"
        },
        {
         "name" : "Laner",
         "description" : "Ядро аналитических запросов (OLAP) для работы в рядном режиме"
        },
        {
         "name" : "Stat",
         "description" : "Статистические методы: линейная регрессия, универсальный тренд и т.д."
        },
        {
         "name" : "Cp",
         "description" : "Задачи оптимального управления"
        },
        {
         "name" : "Adhoc",
         "description" : "Ядро конструктора аналитических панелей"
        },
        {
         "name" : "Transform",
         "description" : "Ядро преобразований моделирования"
        },
        {
         "name" : "NN",
         "description" : "Нейронные сети"
        },
        {
         "name" : "BISearch",
         "description" : "BI-поиск"
        },
        {
         "name" : "Visualizators",
         "description" : "Визуализаторы"
        },
        {
         "name" : "Python",
         "description" : "Вызов функций на языке Python"
        },
        {
         "name" : "ABAC",
         "description" : "Ядро ABAC"
        },
        {
         "name" : "BPM",
         "description" : "Объекты бизнес-процессов"
        },
        {
         "name" : "Host",
         "description" : "Работа с внешними приложениями, лицензирование"
        },
        {
         "name" : "Java",
         "description" : "Вызов функций на языке Java"
        },
        {
         "name" : "ProjectPlanning",
         "description" : "Диаграммы Ганта"
        },
        {
         "name" : "DecisionTree",
         "description" : "Дерево решений"
        },
        {
         "name" : "Algo",
         "description" : "Алгоритмы расчёта показателей"
        },
        {
         "name" : "DEF",
         "description" : "Формы ввода\/вывода"
        }
      ]
    }
  }
}


public static GetBuiltinAssembliesResult GetBuiltinAssemblies()
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetBuiltinAssemblies();
    //Получение информации о системных сборках
    var result = somClient.GetBuiltinAssemblies(tGet);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

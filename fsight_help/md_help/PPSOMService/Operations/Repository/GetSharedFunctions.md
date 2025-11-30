# GetSharedFunctions: Операция

GetSharedFunctions: Операция
-


**


# GetSharedFunctions


## Синтаксис


GetTabUserFunctionsResult GetSharedFunctions(MbId
 tMb)


## Параметры


tMb. Моникёр
 соединения с репозиторием.


## Описание


Операция GetSharedFunctions
 получает список пользовательских функций, доступных для использования
 в формулах.


## Комментарии


Для выполнения операции укажите в поле tMb
 моникёр соединения с репозиторием. Моникёр может быть получен при выполнении
 операции [OpenMetabase](OpenMetabase.htm).


Результатом операции будет список пользовательских функций, который
 настроен в репозитории. Для каждой функции будет получено её описание
 и список входных параметров.


## Пример


Ниже приведён пример получения списка пользовательских функций, доступных
 для использования в формулах.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetSharedFunctions xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tMb xsi:type="**q1:OpenMetabaseResult**" xmlns="****" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**">
  <id>KJOFDBINAHDOFOAELHDKMOCHAELFDJAEIIENOHBLOEJDKIOM!M</id>  <sessKey>271704</sessKey>  <sessCookie>C2</sessCookie>  <version>163</version>  <defLocale>1049</defLocale>  <driver>2</driver>  </tMb>
  </GetSharedFunctions>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetSharedFunctionsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<fns xmlns="****">
  <n>test</n>  <dsc>MyFunc</dsc>  </fns>
[![](../../minus.gif)](../../#)<fns xmlns="****">
  <n>CalculateCount</n>[![](../../minus.gif)](../../#)<prms>
  <n>Cells</n>  <dt>5</dt>  </prms>
  </fns>
[![](../../minus.gif)](../../#)<fns xmlns="****">
  <n>GetData</n>  </fns>
[![](../../minus.gif)](../../#)<fns xmlns="****">
  <n>QuadraticEquation</n>[![](../../minus.gif)](../../#)<prms>
  <n>a</n>  <dt>2</dt>  </prms>
[![](../../minus.gif)](../../#)<prms>
  <n>b</n>  <dt>2</dt>  </prms>
[![](../../minus.gif)](../../#)<prms>
  <n>c</n>  <dt>2</dt>  </prms>
  </fns>
[![](../../minus.gif)](../../#)<fns xmlns="****">
  <n>UserArima</n>  </fns>
[![](../../minus.gif)](../../#)<fns xmlns="****">
  <n>ProblemCreation</n>  <dsc>арифметический</dsc>  </fns>
[![](../../minus.gif)](../../#)<fns xmlns="****">
  <n>UserProc</n>  <dsc>поточечный</dsc>  </fns>
[![](../../minus.gif)](../../#)<fns xmlns="****">
  <n>ModelVariable</n>  <dsc>векторный</dsc>  </fns>
[![](../../minus.gif)](../../#)<fns xmlns="****">
  <n>test11</n>  <dsc>Подбор зависимости</dsc>[![](../../minus.gif)](../../#)<prms>
  <n>StartValue</n>  <dt>2</dt>  <dsc>Начальное значение</dsc>  </prms>
[![](../../minus.gif)](../../#)<prms>
  <n>IsYear</n>  <dt>4</dt>  <dsc>Признак того, что используются готовые данные</dsc>  </prms>
  </fns>
[![](../../minus.gif)](../../#)<fns xmlns="****">
  <n>TransformData</n>[![](../../minus.gif)](../../#)<prms>
  <n>Input</n>  <dt>5</dt>  </prms>
[![](../../minus.gif)](../../#)<prms>
  <n>Output</n>  <dt>5</dt>  </prms>
  </fns>
[![](../../minus.gif)](../../#)<fns xmlns="****">
  <n>CalcUserRegression</n>  <dsc>Transforms data using linear regression (custom algorithm).
Выполняет преобразование данных с помощью линейной регрессии (собственный алгоритм).</dsc>[![](../../minus.gif)](../../#)<prms>
  <n>Factor</n>  <dt>5</dt>  <dsc>Factor impacting modeling data.
Фактор, влияющий на моделируемые данные.</dsc>  </prms>
[![](../../minus.gif)](../../#)<prms>
  <n>Constant</n>  <dt>2</dt>  <dsc>Пользовательское значение константы.</dsc>  </prms>
  </fns>
[![](../../minus.gif)](../../#)<fns xmlns="****">
  <n>test1</n>  </fns>
[![](../../minus.gif)](../../#)<fns xmlns="****">
  <n>PiDiv</n>  <dsc>Значение делим на 'Пи'</dsc>[![](../../minus.gif)](../../#)<prms>
  <n>Input</n>  <dt>2</dt>  </prms>
  </fns>
  </GetSharedFunctionsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetSharedFunctions" :
  {
   "tMb" :
    {
     "@type" : "q1:OpenMetabaseResult",
     "id" : "KJOFDBINAHDOFOAELHDKMOCHAELFDJAEIIENOHBLOEJDKIOM!M",
     "sessKey" : "271704",
     "sessCookie" : "C2",
     "version" : "163",
     "defLocale" : "1049",
     "driver" : "2"
    }
  }
}

### JSON-ответ:


{
 "GetSharedFunctionsResult" :
  {
   "fns" :
    [
      {
       "n" : "test",
       "dsc" : "MyFunc"
      },
      {
       "n" : "CalculateCount",
       "prms" :
        {
         "n" : "Cells",
         "dt" : "5"
        }
      },
      {
       "n" : "GetData"
      },
      {
       "n" : "QuadraticEquation",
       "prms" :
        [
          {
           "n" : "a",
           "dt" : "2"
          },
          {
           "n" : "b",
           "dt" : "2"
          },
          {
           "n" : "c",
           "dt" : "2"
          }
        ]
      },
      {
       "n" : "UserArima"
      },
      {
       "n" : "ProblemCreation",
       "dsc" : "арифметический"
      },
      {
       "n" : "UserProc",
       "dsc" : "поточечный"
      },
      {
       "n" : "ModelVariable",
       "dsc" : "векторный"
      },
      {
       "n" : "test11",
       "dsc" : "Подбор зависимости",
       "prms" :
        [
          {
           "n" : "StartValue",
           "dt" : "2",
           "dsc" : "Начальное значение"
          },
          {
           "n" : "IsYear",
           "dt" : "4",
           "dsc" : "Признак того, что используются готовые данные"
          }
        ]
      },
      {
       "n" : "TransformData",
       "prms" :
        [
          {
           "n" : "Input",
           "dt" : "5"
          },
          {
           "n" : "Output",
           "dt" : "5"
          }
        ]
      },
      {
       "n" : "CalcUserRegression",
       "dsc" : "Transforms data using linear regression (custom algorithm).
Выполняет преобразование данных с помощью линейной регрессии (собственный алгоритм).",
       "prms" :
        [
          {
           "n" : "Factor",
           "dt" : "5",
           "dsc" : "Factor impacting modeling data.
Фактор, влияющий на моделируемые данные."
          },
          {
           "n" : "Constant",
           "dt" : "2",
           "dsc" : "Пользовательское значение константы."
          }
        ]
      },
      {
       "n" : "test1"
      },
      {
       "n" : "PiDiv",
       "dsc" : "Значение делим на 'Пи'",
       "prms" :
        {
         "n" : "Input",
         "dt" : "2"
        }
      }
    ]
  }
}


public static GetTabUserFunctionsResult GetSharedFunctions(MbId mb)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetSharedFunctions()
    {
        tMb = mb
    };
    // Получение информации о доступных пользовательских функциях
    var result = somClient.GetSharedFunctions(tGet);
    return result;
}


См. также:


[Специфические
 операции](Specific_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

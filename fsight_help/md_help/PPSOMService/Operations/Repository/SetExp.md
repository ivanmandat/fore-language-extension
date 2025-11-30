# SetExp: Операция

SetExp: Операция
-


**


# SetExp


## Синтаксис


GetTreeElementsResult SetExp(


ExpressionId tExpressionId,


TermProviderId tTermProviderId,


ExpOperations tOperations,


ExpressionArgs tExpressionAgrs)


## Параметры


tExpressionId. Моникёр выражения,
 для которого выполняется операция.


tTermProviderId. Моникёр провайдера,
 который будет обрабатывать термы.


tOperations. Параметры выполнения
 операции.


tExpressionAgrs. Термы и параметры
 термов, используемые при выполнении операции.


## Описание


Операция SetExp используется
 для формирования термов по передаваемой информации.


## Комментарии


Данная операция позволяет по передаваемой информации об элементах измерений,
 рядах, функциях (математических, статистических и других), операциях (арифметических,
 логических и других) получить термы, которые используются для формирования
 конечных выражений. Полученные выражения используются ядром «Форсайт. Аналитическая платформа»
 для вычисления значений.


Для выполнения операции необходимо в tExpressionId
 и tTermProviderId указать моникёры
 выражения, для которого формируются термы, и провайдера, который обрабатывает
 термы и формирует их формулу. Моникёры формируются в зависимости от объекта,
 с редактором выражения которого осуществляется работа. В общем виде моникёры
 имеют следующее представление: «моникёр
 объекта»!«префикс объекта»!Trans!«тип трансформации»!«ключ трансформации»!«постфикс».


Где:


	- «моникёр объекта». Моникёр
	 объекта, в котором осуществляется работа с выражением. Работа с выражениями
	 может осуществляться в объектах задачи ETL, в аналитической области
	 данных, при работе со страницами регламентных отчетов, экспресс-отчетов,
	 рабочих книг, в мастерах кубов, справочников и таблицы.


	- «префикс объекта». Префикс,
	 указывающий тип объекта. Допустимые значения:


		- Eax. Экспресс-отчеты;


		- Laner. Рабочие книги;


	- «тип трансформации».
	 Зависит от назначения формируемого выражения. Допустимые значения:


		- Calc. Выражение
		 для вычисления значения;


		- Sort. Выражение
		 сортировки;


		- Filter. Выражение
		 фильтрации.


	- «ключ трансформации».
	 Ключ трансформации может быть получен в метаданных того объекта, с
	 которым осуществляется работа.


	- «постфикс».
	 Добавляется в зависимости от указываемого моникера. Допустимые значения:


		- Exp.
		 Для моникера tExpressionId;


		- TermProv.
		 Для моникера tTermProviderId.


При работе с задачей ETL используется следующий
 моникёр: «моникёр задачи ETL»!Objects!«индекс
 объекта»!Exp«Индекс входа/выхода».


При работе с формулами вычисляемого куба
 используется следующий моникёр: «моникёр
 экземпляра вычисляемого куба»!keyDim1.element0|keyDim2.element1|keyDimn.elementm!ExpN,
 где keyDim1, keyDim2, keyDimn - ключи
 измерений; element0, element1, elementm - индексы элементов в измерениях.
 Ключи измерений и индексы элементов формируют координату, по которой задаётся
 формула в вычисляемом кубе. ExpN - индекс формулы, если в кубе включено
 управление периодом действия формул. Индексация начинается с 0.


При настройке фильтрации для реляционного
 объекта: «моникёр из поля cachedDatasetId»!FILTER.


В tOperations указываются параметры
 выполнения операции, а в tExpressionAgrs
 термы и параметры для формирования термов, которые будут использоваться
 при выполнении операции.


Результатом выполнения операции будут сформированные внутренние представления
 термов, которые могут использоваться для составления выражений, или информация
 об ошибках, если были указаны некорректные параметры термов.


## Пример


Ниже приведен пример использования операции SetExp
 для обработки набора термов, а также формирования нового терма по информации
 об элементе в измерении. В запросе передается набор термов и параметры
 для создания нового терма. В ответе приходят сформированные внутренние
 представления термов и информация о новом терме.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetExp xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tExpressionId xmlns="****">
  <id>S1!M!S!E2!Eax!Trans!Calc!18590!Exp</id>  </tExpressionId>
[![](../../minus.gif)](../../#)<tTermProviderId xmlns="****">
  <id>S1!M!S!E2!Eax!Trans!Calc!18590!TermProv</id>  </tTermProviderId>
[![](../../minus.gif)](../../#)<tOperations xmlns="****">
[![](../../minus.gif)](../../#)<meta>
  <Terms>true</Terms>  <IsValid>true</IsValid>  <NewTerm>true</NewTerm>  </meta>
[![](../../minus.gif)](../../#)<metaGet>
  <Terms>true</Terms>  <IsValid>true</IsValid>  <bErrorMessage>true</bErrorMessage>  <bErrorPosition>true</bErrorPosition>  <NewTerm>true</NewTerm>  </metaGet>
  </tOperations>
[![](../../minus.gif)](../../#)<tExpressionAgrs xmlns="****">
[![](../../minus.gif)](../../#)<Terms>
[![](../../minus.gif)](../../#)<terms>
[![](../../minus.gif)](../../#)<Item>
  <sText>{Первый элемент[t]}</sText>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <sText>+</sText>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <sText>{Второй элемент[t]}</sText>  </Item>
  </terms>
  </Terms>
[![](../../minus.gif)](../../#)<NewTermParams>
[![](../../minus.gif)](../../#)<it>
  <n>tag</n>  <v>eax.de</v>  </it>
[![](../../minus.gif)](../../#)<it>
  <n>key</n>  <v>116</v>  </it>
[![](../../minus.gif)](../../#)<it>
  <n>elKey</n>  <v>3</v>  </it>
  </NewTermParams>
  <InsertNewTermAt>0</InsertNewTermAt>  </tExpressionAgrs>
  </SetExp>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetExpResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<Terms xmlns="****">
[![](../../minus.gif)](../../#)<terms>
[![](../../minus.gif)](../../#)<Item>
  <bIsLiteral>0</bIsLiteral>  <sText>{Первый элемент[t]}</sText>  <sFormula>@_18644:0[]</sFormula>  <sParseableText>{Первый элемент[t]}</sParseableText>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <bIsLiteral>1</bIsLiteral>  <sText> + </sText>  <sFormula> + </sFormula>  <sParseableText> + </sParseableText>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <bIsLiteral>0</bIsLiteral>  <sText>{Второй элемент[t]}</sText>  <sFormula>@_18645:0[]</sFormula>  <sParseableText>{Второй элемент[t]}</sParseableText>  </Item>
  </terms>
  </Terms>
  <bIsValid xmlns="****">1</bIsValid>[![](../../minus.gif)](../../#)<NewTerm xmlns="****">
  <bIsLiteral>0</bIsLiteral>  <sText>Третий элемент</sText>  <sFormula>@__1</sFormula>  </NewTerm>
  </SetExpResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetExp" :
  {
   "tExpressionId" :
    {
     "id" : "S1!M!S!E2!Eax!Trans!Calc!18590!Exp"
    },
   "tTermProviderId" :
    {
     "id" : "S1!M!S!E2!Eax!Trans!Calc!18590!TermProv"
    },
   "tOperations" :
    {
     "meta" :
      {
       "Terms" : "true",
       "IsValid" : "true",
       "NewTerm" : "true"
      },
     "metaGet" :
      {
       "Terms" : "true",
       "IsValid" : "true",
       "bErrorMessage" : "true",
       "bErrorPosition" : "true",
       "NewTerm" : "true"
      }
    },
   "tExpressionAgrs" :
    {
     "Terms" :
      {
       "terms" :
        {
         "Item" :
          [
            {
             "sText" : "{Первый элемент[t]}"
            },
            {
             "sText" : "+"
            },
            {
             "sText" : "{Второй элемент[t]}"
            }
          ]
        }
      },
     "NewTermParams" :
      {
       "it" :
        [
          {
           "n" : "tag",
           "v" : "eax.de"
          },
          {
           "n" : "key",
           "v" : "116"
          },
          {
           "n" : "elKey",
           "v" : "3"
          }
        ]
      },
     "InsertNewTermAt" : "0"
    }
  }
}

### JSON-ответ:


{
 "SetExpResult" :
  {
   "Terms" :
    {
     "terms" :
      {
       "Item" :
        [
          {
           "bIsLiteral" : "0",
           "sText" : "{Первый элемент[t]}",
           "sFormula" : "@_18644:0[]",
           "sParseableText" : "{Первый элемент[t]}"
          },
          {
           "bIsLiteral" : "1",
           "sText" : " + ",
           "sFormula" : " + ",
           "sParseableText" : " + "
          },
          {
           "bIsLiteral" : "0",
           "sText" : "{Второй элемент[t]}",
           "sFormula" : "@_18645:0[]",
           "sParseableText" : "{Второй элемент[t]}"
          }
        ]
      }
    },
   "bIsValid" : "1",
   "NewTerm" :
    {
     "bIsLiteral" : "0",
     "sText" : "Третий элемент",
     "sFormula" : "@__1"
    }
  }
}


    public static ExpressionResult SetExpression(EaxId moniker, ulong transformKey)
    {
        var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
        //Параметры выполнения операции
        var tSet = new SetExp()
        {
            tExpressionId = new ExpressionId() { id = moniker.id + "!Eax!Trans!Calc!" + transformKey.ToString() + "!Exp" },
            tTermProviderId = new TermProviderId() { id = moniker.id + "!Eax!Trans!Calc!" + transformKey.ToString() + "!TermProv" },
            tOperations = new ExpOperations()
            {
                meta = new ExpMetaOperations()
                {
                    Terms = true,
                    NewTerm = true,
                    IsValid = true
                },
                metaGet = new ExpMetaOperationsPattern()
                {
                    Terms = true,
                    NewTerm = true,
                    IsValid = true,
                    bErrorMessage = true,
                    bErrorPosition = true
                }
            },
            tExpressionAgrs = new ExpressionArgs()
            {
                Terms = new ExpressionTerms()
                {
                    terms = new ExpressionTerm[]
                    {
                        new ExpressionTerm() { sText = "{Первый элемент[t]}" },
                        new ExpressionTerm() { sText = "+" },
                        new ExpressionTerm() { sText = "{Второй элемент[t]}" }
                    }
                },
                NewTermParams = new TreeTermParam[]
                {
                    new TreeTermParam() { n = "tag", v = "eax.de" },
                    new TreeTermParam() { n = "key", v = "116" },
                    new TreeTermParam() { n = "elKey", v = "3" },
                },
                InsertNewTermAt = 0
            }
        };
        //Обработка термов
        var result = somClient.SetExp(tSet);
        return result;
    }


См. также:


[Специфические
 операции](Specific_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

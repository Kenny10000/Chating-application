 <?php  
// session_start();
// if(isset($_SESSION['unique_id'])){
//     header("location: users.php");
// }
?> 
<?php include_once "header.php";?>
</head>
<body>
    <div class="wrapper">
        <section class="form login">
            <header class="name">Connect lite</header>
            <form action="">
                <div class="error-txt"></div>
                    <div class="field input">
                        <label>Email Address</label>
                        <input type="text" name="email" placeholder="Enter your email">
                    </div>
                <div class="field input">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Enter your password">
                </div>
            <div class="field button">
                <input type="submit" value="Login">
             </div>
            </form>
            <div class="link">Not yet Siged up? <a href="index.php">signup now</a></div>
        </section>

    </div>

    <script src="login.js"></script>
</body>
</html>
<template>
    <div class="container mt-5">
        <div class="row mb-4">
            <div class="col text-center">
                <h1>Order Details</h1>
                <p class="text-muted">Order ID: #12345</p>
                <h3>John Michael</h3>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-6">
                <div class="card mb-4">
                    <div class="card-header bg-primary text-white">
                        <h5 class="mb-0">Order Information</h5>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><strong>Status:</strong> New</li>
                            <li class="list-group-item"><strong>Amount:</strong> $100</li>
                            <li class="list-group-item"><strong>Date:</strong> Sept 6, 2024</li>
                            <li class="list-group-item"><strong>Payment Method:</strong> Credit Card</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="card mb-4">
                    <div class="card-header bg-primary text-white">
                        <h5 class="mb-0">Customer Information</h5>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><strong>Name:</strong> John Michael</li>
                            <li class="list-group-item"><strong>Address:</strong> Yangon, Myanmar</li>
                            <li class="list-group-item"><strong>Email:</strong> john.michael@example.com</li>
                            <li class="list-group-item"><strong>Phone:</strong> +95 123 456 789</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-4">
            <div class="col text-center">
                <button class="btn btn-success me-2">Edit Order</button>
                <button class="btn btn-danger">Cancel Order</button>
            </div>
        </div>
    </div>
</template>